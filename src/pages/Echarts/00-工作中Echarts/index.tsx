import React, { createRef, useEffect } from 'react';
import { Card } from 'antd';
import * as echarts from 'echarts';

import chartConfig_01 from './01/chartConfig';

const GetStartedECharts: React.FC = () => {
  const echartsRef1: any = createRef();
  const echartsRef2: any = createRef();

  // echartsRef1 柱状图
  useEffect(() => {
    const date = [
      '2020-12-23',
      '2020-12-24',
      '2020-12-25',
      '2020-12-26',
      '2020-12-27',
      '2020-12-28',
      '2020-12-29',
      '2020-12-26',
      '2020-12-27',
      '2020-12-28',
      '2020-12-29',
      '2020-12-26',
      '2020-12-27',
      '2020-12-28',
      '2020-12-29',
      '2020-12-26',
      '2020-12-27',
      '2020-12-28',
      '2020-12-29',
      '2020-12-30',
    ];
    const Increment = [
      120,
      -140,
      200,
      120,
      110,
      12,
      9,
      120,
      140,
      20,
      120,
      110,
      12,
      9,
      120,
      140,
      20,
      120,
      110,
      12,
    ];
    const Total = [
      10000,
      20000,
      19000,
      14000,
      18000,
      18000,
      14000,
      10000,
      17000,
      16000,
      14000,
      18000,
      18000,
      14000,
      10000,
      20000,
      19000,
      14000,
      18000,
      18000,
    ];

    if (echartsRef1.current) {
      var myChart = echartsRef1.current && echarts.init(echartsRef1.current);
      // 绘制图表
      myChart.setOption(chartConfig_01(date, Increment, Total, 3));
    }
  }, []);

  // echartsRef2 圆饼图
  useEffect(() => {
    if (echartsRef2.current) {
      var myChart = echarts.init(echartsRef2.current);
      // 绘制图表
      myChart.setOption({
        title: {
          text: '饼图',
        },
        tooltip: {},
        series: [
          {
            name: '销量',
            type: 'pie',
            data: [
              { name: '衬衫', value: 5 },
              { name: '羊毛衫', value: 20 },
              { name: '雪纺衫', value: 36 },
              { name: '裤子', value: 10 },
              { name: '高跟鞋', value: 10 },
              { name: '袜子', value: 20 },
            ],
          },
        ],
      });
    }
  }, []);

  return (
    <Card bodyStyle={{ display: 'flex' }} title="ECharts 入门示例">
      <div style={{ height: 300, flex: 1 }} ref={echartsRef1}></div>
      <div style={{ height: 300, flex: 1 }} ref={echartsRef2}></div>
    </Card>
  );
};

export default GetStartedECharts;
