import React from 'react';
import { Card } from 'antd';

import SchemaFormDemo from './SchemaFormDemo';
import AntdDemo from './AntdDemo';

const InitialFormily: React.FC = () => {
  return (
    <>
      <Card title="SchemaFormDemo">
        <SchemaFormDemo />
      </Card>
      <Card title="AntdDemo" style={{ marginTop: '20px' }}>
        <AntdDemo />
      </Card>
    </>
  );
};
export default InitialFormily;
