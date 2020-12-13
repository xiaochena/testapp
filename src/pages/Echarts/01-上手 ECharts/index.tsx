import React, { createRef, useEffect } from 'react';
import { Card } from 'antd';
import * as echarts from 'echarts';

const GetStartedECharts: React.FC = () => {
  const echartsRef1: any = createRef();
  const echartsRef2: any = createRef();
  const echartsRef3: any = createRef();

  // echartsRef1 柱状图
  useEffect(() => {
    if (echartsRef1.current) {
      var myChart = echartsRef1.current && echarts.init(echartsRef1.current);
      // 绘制图表
      myChart.setOption({
        title: {
          text: '柱状图',
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

  // 折线图
  useEffect(() => {
    if (echartsRef3.current) {
      var myChart = echartsRef3.current && echarts.init(echartsRef3.current);
      // 绘制图表
      myChart.setOption({
        title: {
          text: '折线图',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    }
  }, []);

  return (
    <Card bodyStyle={{ display: 'flex' }} title="ECharts 入门示例">
      <div style={{ height: 300, flex: 1 }} ref={echartsRef1}></div>
      <div style={{ height: 300, flex: 1 }} ref={echartsRef2}></div>
      <div style={{ height: 300, flex: 1 }} ref={echartsRef3}></div>
    </Card>
  );
};

export default GetStartedECharts;
