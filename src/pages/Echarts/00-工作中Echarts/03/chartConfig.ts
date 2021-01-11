/**
 * 图表配置
 *
 * @param {array} xAxisData x轴值
 * @param {array} yIncrementData y轴数据
 */

export default (
  xAxisData: string[],
  yAxisData: string[] | number[],
): object => {
  return {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'line', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '增量',
        yAxisIndex: 0,
        type: 'bar',
        color: '#FF7FBA',
        symbolSize: 10,
        barMaxWidth: '30',
        data: yAxisData,
        itemStyle: {
          color(data: any) {
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
                      color: '#FF7FBA', // 0% 处的颜色
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
    ],
  };
};
