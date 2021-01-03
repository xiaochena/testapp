import React, {
  useState,
  useEffect,
  createRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { CSSProperties } from 'react';
import chartConfig from './chartConfig';

import * as echarts from 'echarts';
// // 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
// // 引入柱状图
// import 'echarts/lib/chart/bar';
// // 引入折线图
// import 'echarts/lib/chart/line';
// // 引入图例、提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';

interface ChartProps {
  xData: any[]; // x轴值
  yIncrement: any[]; // y轴增量数据
  yTotal: any[]; // y轴总量数据
  intervalNum?: number; // 可选值:y轴正轴分割的段数 默认为5

  style?: CSSProperties;
  className?: string | undefined;
}

export interface RefCurrent {
  echarts?: echarts.ECharts;
}

const Chart = forwardRef<RefCurrent, ChartProps>((props, ref) => {
  const { xData, yIncrement, yTotal, intervalNum, ...DivProps } = props;
  const echartsRef = createRef<HTMLDivElement>();

  const [myChart, setMyChart] = useState<echarts.ECharts>();
  // const eChart;

  useEffect(() => {
    if (echartsRef.current) {
      // 初始化
      const myChart = echartsRef.current && echarts.init(echartsRef.current);
      myChart.setOption(chartConfig(xData, yIncrement, yTotal, intervalNum));
      window.onresize = () => {
        myChart.resize();
      };
      setMyChart(myChart);
    }
  }, [echartsRef]);

  useImperativeHandle(ref, () => ({
    echarts: myChart,
  }));

  return <div ref={echartsRef} {...DivProps}></div>;
});

export default Chart;
