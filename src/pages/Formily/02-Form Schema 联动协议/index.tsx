import React from 'react';
import { Card } from 'antd';

import TypeValueVisible from './Type_ValueVisible';
import Type_ValueState from './Type_ValueState';
import Type_ValueSchema from './Type_ValueSchema';

const FormSchemaXlinkages = () => {
  return (
    <>
      <Card title="指定字段显示隐藏" style={{ marginBottom: '14px' }}>
        <TypeValueVisible />
      </Card>
      <Card title="指定字段的状态" style={{ marginBottom: '14px' }}>
        <Type_ValueState />
      </Card>
      <Card title="指定字段的schema">
        <Type_ValueSchema />
      </Card>
    </>
  );
};
export default FormSchemaXlinkages;
