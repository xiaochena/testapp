import React, { ReactNode, useEffect, useState } from 'react';
import { Button, Card, Input, Space } from 'antd';

const RegularTest: React.FC = () => {
  const [value, setValue] = useState('');
  const [match, setMatch] = useState('');
  const [result, setResult] = useState('-');

  useEffect(() => {
    // eslint-disable-next-line no-eval
    try {
      const exp = new RegExp(match, 'g');
      const result = value.replace(
        exp,
        search => `<span style="color: red;">${search}</span>`,
      );
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

const RegularDemo: React.FC = () => {
  const World = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
  const [str, setStr] = useState('');

  const onClick = () => {
    let str = World.match(/[a-z]/g)?.join('') ?? '';
    setStr(str);
  };

  return (
    <div>
      <Card>
        <div>
          <Space>
            <span>{World}</span>
            <span>{str}</span>
          </Space>
        </div>
        <Button type="primary" onClick={onClick}>
          匹配 (/[a-z]/g)
        </Button>
      </Card>
    </div>
  );
};

export default () => {
  return (
    <div>
      <RegularTest />
      <RegularDemo />
    </div>
  );
};
