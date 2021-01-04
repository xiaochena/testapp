import React, { createRef, useEffect } from 'react';
import { Card } from 'antd';

import Chart01, { RefCurrent as RefCurrent01 } from './01';

import { DB_01 } from './DB';

const GetStartedECharts: React.FC = () => {
  const echartsRef1 = createRef<RefCurrent01>();
  const echartsRef2: any = createRef();

  return (
    <Card bodyStyle={{ display: 'flex' }} title="ECharts 入门示例">
      <Chart01
        ref={echartsRef1}
        style={{ height: 300, flex: 1 }}
        xData={DB_01.data}
        yIncrement={DB_01.Increment}
        yTotal={DB_01.Total}
      />
      <div style={{ height: 300, flex: 1 }} ref={echartsRef2}></div>
    </Card>
  );
};

export default GetStartedECharts;
