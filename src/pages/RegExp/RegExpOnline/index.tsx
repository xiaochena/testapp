import React, { useEffect, useState } from 'react';
import { Button, Card, Input, Space } from 'antd';

/** 在线正则 */
const RegExpOnline: React.FC = () => {
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

export default RegExpOnline;
