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

interface ChartProps {
  style?: CSSProperties;
  className?: string | undefined;

  xData?: string[];
  yData?: YAxisData[];
  loading?: boolean;
}

interface YAxisData {
  name: string;
  data: any[];
}

export interface RefCurrent {
  echarts?: echarts.ECharts;
}

const Chart = forwardRef<RefCurrent, ChartProps>((props, ref) => {
  const { xData = [], yData = [], loading, ...DivProps } = props;
  const echartsRef = createRef<HTMLDivElement>();

  const [myChart, setMyChart] = useState<echarts.ECharts>();

  useEffect(() => {
    let echResize: () => void;
    if (echartsRef.current) {
      // 初始化
      const myChart = echartsRef.current && echarts.init(echartsRef.current);
      myChart.setOption(chartConfig(xData, yData));
      setMyChart(myChart);

      // 加载状态
      if (loading) {
        myChart.showLoading('default', {
          text: '',
          color: '#FF7FBA',
          textColor: '#000',
          maskColor: 'rgba(255, 255, 255, 0.3)',
        });
      } else {
        myChart.hideLoading();
      }

      // 监听边框大小是否发送变化修改 echarts
      echResize = () => myChart.resize();
      window.addEventListener('resize', echResize);
    }

    // 移除监听
    return () => {
      window.removeEventListener('resize', echResize);
    };
  }, [echartsRef.current, xData, yData, loading]);

  useImperativeHandle(ref, () => ({
    echarts: myChart,
  }));

  return <div ref={echartsRef} {...DivProps}></div>;
});

export default Chart;
