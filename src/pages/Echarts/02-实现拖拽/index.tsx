import React, { createRef, useEffect } from 'react';
import { Card } from 'antd';
import * as echarts from 'echarts';

const DragECharts: React.FC = () => {
  const echartsRef1: any = createRef();

  // echartsRef1 柱状图
  useEffect(() => {
    var symbolSize = 20;
    // 这个 data 变量在这里单独声明，在后面也会用到。
    var data = [
      [15, 0],
      [-50, 10],
      [-56.5, 20],
      [-46.5, 30],
      [-22.1, 40],
    ];

    if (echartsRef1.current) {
      var myChart = echartsRef1.current && echarts.init(echartsRef1.current);
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'value',
          axisLine: { onZero: false },
        },
        yAxis: {
          type: 'value',
          axisLine: { onZero: false },
        },
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize, // 为了方便拖拽，把 symbolSize 尺寸设大了。
            data: data,
          },
        ],
      });

      myChart.setOption({
        graphic: (echarts as any).util.map(
          data,
          (item: any, dataIndex: any) => {
            return {
              type: 'circle',
              position: myChart.convertToPixel('grid', item),
              shape: {
                r: symbolSize / 2,
              },
              invisible: true,
              draggable: true,
              ondrag: (echarts as any).util.curry(onPointDragging, dataIndex),
              onmousemove: (echarts as any).util.curry(showTooltip, dataIndex),
              onmouseout: (echarts as any).util.curry(hideTooltip, dataIndex),
              z: 100,
            };
          },
        ),
      });

      function onPointDragging(dataIndex: any, dx: any, dy: any) {
        data[dataIndex] = myChart.convertFromPixel('grid', this.position);
        myChart.setOption({
          series: [
            {
              id: 'a',
              data: data,
            },
          ],
        });
      }

      function hideTooltip(dataIndex: any) {
        myChart.dispatchAction({
          type: 'hideTip',
        });
      }

      function showTooltip(dataIndex: any) {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: dataIndex,
        });
      }
    }
  }, []);

  return (
    <Card bodyStyle={{ display: 'flex' }} title="ECharts 拖拽">
      <div style={{ height: 300, flex: 1 }} ref={echartsRef1}></div>
      <div style={{ height: 300, flex: 1 }}></div>
      <div style={{ height: 300, flex: 1 }}></div>
    </Card>
  );
};

export default DragECharts;
