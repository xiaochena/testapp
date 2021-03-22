import { Card, Space } from 'antd';
import React from 'react';
import ContextHook from './ContextHook';
import StateHook from './StateHook';

const HookComponent: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card>
        <StateHook />
      </Card>
      <Card>
        <ContextHook />
      </Card>
    </Space>
  );
};

export default HookComponent;
