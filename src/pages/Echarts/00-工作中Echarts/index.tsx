import React, { createRef, useEffect, useState } from 'react';
import { Button, Card, Space } from 'antd';

import Chart01, { RefCurrent as RefCurrent01 } from './01';
import Chart02, { RefCurrent as RefCurrent02 } from './02';
import Chart03, { RefCurrent as RefCurrent03 } from './03';

import { getEcharts_DB } from '@/services/Echarts/00-workOnEcharts';

const GetStartedECharts: React.FC = () => {
  const [DB_01, setDB_01] = useState<iDB_01>();
  const [DB_02, setDB_02] = useState<iDB_02>();
  const [loading, setLoading] = useState(false);
  const chartsRef1 = createRef<RefCurrent01>();
  const chartsRef2 = createRef<RefCurrent02>();
  const chartsRef3 = createRef<RefCurrent03>();

  useEffect(() => {
    callGetEcharts_DB();
  }, []);

  const callGetEcharts_DB = () => {
    setLoading(true);
    getEcharts_DB().then(res => {
      setDB_01(res.data?.DB_01);
      setDB_02(res.data?.DB_02);
      setLoading(false);
    });
  };

  const titleHtml = (
    <Space>
      <div>ECharts 入门示例</div>
      <Button type="primary" onClick={callGetEcharts_DB}>
        获取数据
      </Button>
    </Space>
  );

  return (
    <Card bodyStyle={{ display: 'flex' }} title={titleHtml}>
      <Chart01
        style={{ height: 300, flex: 1 }}
        ref={chartsRef1}
        xData={DB_01?.data}
        yIncrement={DB_01?.Increment}
        yTotal={DB_01?.Total}
        loading={loading}
      />

      <Chart02
        style={{ height: 300, flex: 1 }}
        ref={chartsRef2}
        xData={DB_02?.dateList}
        yData={DB_02?.yAxisData}
        loading={loading}
      />

      <Chart03
        style={{ height: 300, flex: 1 }}
        ref={chartsRef3}
        xData={DB_01?.data}
        loading={loading}
        yData={DB_01?.Increment}
      />
    </Card>
  );
};

export default GetStartedECharts;
