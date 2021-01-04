import React, { createRef } from 'react';
import { Card } from 'antd';

import Chart01, { RefCurrent as RefCurrent01 } from './01';
import Chart02, { RefCurrent as RefCurrent02 } from './02';

import { DB_01, DB_02 } from './DB';

const GetStartedECharts: React.FC = () => {
  const chartsRef1 = createRef<RefCurrent01>();
  const chartsRef2: any = createRef<RefCurrent02>();

  return (
    <Card bodyStyle={{ display: 'flex' }} title="ECharts 入门示例">
      <Chart01
        style={{ height: 300, flex: 1 }}
        ref={chartsRef1}
        xData={DB_01.data}
        yIncrement={DB_01.Increment}
        yTotal={DB_01.Total}
      />

      <Chart02
        style={{ height: 300, flex: 1 }}
        ref={chartsRef2}
        xData={DB_02.xAxisData}
        yData={DB_02.yAxisData}
      />
    </Card>
  );
};

export default GetStartedECharts;
