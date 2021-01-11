/**
 * 图表配置
 *
 * @param {array} xAxisData x轴值
 * @param {array} yIncrementData y轴数据
 */

interface YAxisData {
  name: string;
  data: any[];
}

export default (xAxisData: string[], yAxisData: YAxisData[]): object => {
  return {
    color: ['#817AF2', '#FF7FBA', '#8ED9F1', '#FFAD98', '#86A3FF'],
    legend: {
      data: yAxisData.map(item => item.name),
      bottom: 0,
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: yAxisData.map(item => {
      return {
        name: item.name,
        data: item.data,
        type: 'line',
        symbolSize: 10,
      };
    }),
  };
};
