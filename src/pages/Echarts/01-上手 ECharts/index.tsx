import React, { createRef, useEffect } from 'react';
import { Card } from 'antd';
import * as echarts from 'echarts';

const GetStartedECharts: React.FC = () => {
  const echartsRef1: any = createRef();
  const echartsRef2: any = createRef();

  // echartsRef1 柱状图
  useEffect(() => {
    var myChart = echarts.init(echartsRef1.current);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, []);

  // echartsRef2 圆饼图
  useEffect(() => {
    var myChart = echarts.init(echartsRef1.current);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, []);
  return (
    <Card>
      <div style={{ height: 300, width: '100%' }} ref={echartsRef1}></div>
      <div style={{ height: 300, width: '100%' }} ref={echartsRef2}></div>
    </Card>
  );
};

export default GetStartedECharts;
