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

  xData: string[];
  yData: string[] | number[];
}

export interface RefCurrent {
  echarts?: echarts.ECharts;
}

const Chart = forwardRef<RefCurrent, ChartProps>((props, ref) => {
  const { xData, yData, ...DivProps } = props;
  const echartsRef = createRef<HTMLDivElement>();

  const [myChart, setMyChart] = useState<echarts.ECharts>();

  useEffect(() => {
    let echResize: any = '';

    if (echartsRef.current) {
      // 初始化
      const myChart = echartsRef.current && echarts.init(echartsRef.current);
      myChart.setOption(chartConfig(xData, yData));
      setMyChart(myChart);
      echResize = () => myChart.resize();
      window.addEventListener('resize', echResize);
    }

    return () => {
      if (echResize !== '') {
        console.log('resize');
        window.removeEventListener('resize', echResize);
      }
    };
  }, [echartsRef.current]);

  useImperativeHandle(ref, () => ({
    echarts: myChart,
  }));

  return <div ref={echartsRef} {...DivProps}></div>;
});

export default Chart;
