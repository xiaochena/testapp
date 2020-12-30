import React, { createRef, useEffect } from 'react';
import { Card } from 'antd';
import * as echarts from 'echarts';

const GetStartedECharts: React.FC = () => {
  const echartsRef1: any = createRef();
  const echartsRef2: any = createRef();
  const echartsRef3: any = createRef();

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
    ];
    const Increment = [
      1200,
      1400,
      -200,
      1200,
      1100,
      -120,
      -90,
      1200,
      1400,
      -200,
      1200,
      1100,
      -120,
      -90,
      1200,
      1400,
      -200,
      1200,
      1100,
      -120,
      -90,
    ];
    const Total = [
      1000,
      2000,
      1900,
      1400,
      1800,
      1800,
      1400,
      1000,
      2000,
      1900,
      1400,
      1800,
      1800,
      1400,
      1000,
      2000,
      1900,
      1400,
      1800,
      1800,
      1400,
    ];

    if (echartsRef1.current) {
      var myChart = echartsRef1.current && echarts.init(echartsRef1.current);
      // 绘制图表
      myChart.setOption({
        left: 200,
        legend: {
          data: ['增量', '总量'],
        },
        xAxis: {
          type: 'category',
          data: date,
          axisTick: {
            alignWithLabel: true,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        // 缩放
        dataZoom: {
          type: 'slider',
          height: 10,
          xAxisIndex: 0,
          bottom: 0,
          start: 0,
          end: 8 / date.length > 1 ? 100 : (8 / date.length) * 100,
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          fillerColor: 'rgba(255, 255, 255, 0.1)',
          textStyle: {
            color: '#AFBCC4',
          },
        },
        yAxis: [
          {
            type: 'value',
            // min: -30,
            // max: 150,
            max: Math.max(...Increment) + Math.max(...Increment) / 5,
            // min: (-Math.max(...Increment) / 5) * 8,
            min: () => {
              const interval = Math.max(...Increment) / 5;
              const min = Math.min(...Increment);
              if (min > 0) return 0;

              const minAbc = Math.abs(min);
              const minInterval = Math.ceil(minAbc / interval);
              return -(minInterval * (Math.max(...Increment) / 5));
            },
            // min: Math.min(...Increment)-(Math.max(...Increment) - Math.min(...Increment)) / 5,
            interval: Math.max(...Increment) / 5,
            axisTick: {
              alignWithLabel: true,
            },
          },
          {
            type: 'value',
            max: Math.max(...Total) + Math.max(...Total) / 5,
            // min: -(Math.max(...Total) / 5) * 8,
            min: () => {
              const interval = Math.max(...Increment) / 5;
              const min = Math.min(...Increment);
              if (min > 0) return 0;

              const minAbc = Math.abs(min);
              const minInterval = Math.ceil(minAbc / interval);
              return minInterval * (0 - Math.max(...Total) / 5);
            },
            interval: Math.max(...Total) / 5,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        series: [
          {
            name: '增量',
            data: Increment,
            yAxisIndex: 0,
            type: 'bar',
            color: '#9ED9F0',
            symbolSize: 10,
            barMaxWidth: '30',
            itemStyle: {
              color(data) {
                // 设置正负颜色值
                return data.value >= 0
                  ? {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: '#9ED9F0', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(255, 255, 255, 0.83)', // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    }
                  : {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: '#ffad9a', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(255, 255, 255, 0.83)', // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    };
              },
            },
          },
          {
            name: '总量',
            data: Total,
            yAxisIndex: 1,
            type: 'line',
            color: '#817AF2',
            symbolSize: 10,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#817AF2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0.83)', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      });
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
