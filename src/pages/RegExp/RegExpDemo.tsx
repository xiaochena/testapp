import React, { useState, useEffect } from 'react';
import { Card, Space, Input, Button } from 'antd';

const RegExpDemo: React.FC = () => {
  const [value, setValue] = useState('');
  const [match, setMatch] = useState('');
  const [result, setResult] = useState('-');

  useEffect(() => {
    try {
      const exp = new RegExp(match, 'g');
      const result =
        match !== ''
          ? value.replace(
              exp,
              search => `<span style="color: red;">|${search}|</span>`,
            )
          : value;
      setResult(result);
    } catch (error) {}
  }, [match, value]);
  return (
    <Card>
      <div>
        <Space>
          Str：
          <Input value={value} onChange={e => setValue(e.target.value)} />
          match：
          <Input value={match} onChange={e => setMatch(e.target.value)} />
          <Button>提交</Button>
        </Space>
      </div>
      <h2>
        result：
        <span dangerouslySetInnerHTML={{ __html: result }} />
      </h2>
    </Card>
  );
};
