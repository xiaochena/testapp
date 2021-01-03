/**
 * 图表配置
 *
 * @param {array} sortNames 图例
 * @param {array} xAxisData x轴值
 * @param {array} yIncrementData y轴增量数据
 * @param {array} yTotalData y轴总量数据
 * @param {string} unit y周单位坐标
 * @param {number} intervalNum 可选值:正轴分割的段数 默认为5
 */

export default (
  xAxisData: string[],
  yIncrementData: any[],
  yTotalData: any[],
  intervalNum: number = 5,
) => {
  intervalNum = intervalNum - 1;
  let minIntervalNum = 0;
  const yIncrementMax = Math.max(...yIncrementData);
  const yTotalMax = Math.max(...yTotalData);

  return {
    legend: {
      data: ['增量', '总量'],
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    yAxis: [
      {
        name: '增量',
        type: 'value',
        axisLabel: {
          formatter: (value: number) => value.toFixed(0),
        },
        axisTick: {
          alignWithLabel: true,
        },
        max: (value: any) => value.max * ((intervalNum + 1) / intervalNum),
        min: (value: any) => {
          const interval = value.max / intervalNum;
          const min = value.min;
          minIntervalNum = 0;
          if (min < 0) {
            const minAbc = Math.abs(min);
            minIntervalNum = Math.ceil(minAbc / interval);
          }
          return -minIntervalNum * (value.max / intervalNum);
        },
        interval: yIncrementMax / intervalNum,
      },
      {
        name: '总量',
        type: 'value',
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          formatter: (value: number) => value.toFixed(0),
        },
        max: (value: any) => value.max * ((intervalNum + 1) / intervalNum),
        min: (value: any) => -minIntervalNum * (value.max / intervalNum),
        interval: yTotalMax / intervalNum,
      },
    ],
    series: [
      {
        name: '增量',
        data: yIncrementData,
        yAxisIndex: 0,
        type: 'bar',
        color: '#9ED9F0',
        symbolSize: 10,
        barMaxWidth: '30',
        itemStyle: {
          color(data: any) {
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
        data: yTotalData,
        yAxisIndex: 1,
        type: 'line',
        smooth: true,
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
  };
};
