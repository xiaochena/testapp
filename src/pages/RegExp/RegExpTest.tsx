import React, { useEffect, useState } from 'react';
import { Card, Space, Tag } from 'antd';

const RegExpTest: React.FC<{ regExp?: string; str?: string }> = ({
  regExp,
  str,
}) => {
  const [result, setResult] = useState('');
  useEffect(() => {
    try {
      if (regExp) {
        const exp = new RegExp(regExp, 'g');
        const result = str?.replace(
          exp,
          search => `<span style="color: red;">|${search}|</span>`,
        );
        setResult(result || str || '');
      }
    } catch (error) {}
  }, [regExp, str]);

  return (
    <Card>
      <Space>
        <span>
          字符串:<Tag>{str}</Tag>
        </span>
        <span>
          正则:<Tag>{regExp}</Tag>
        </span>
        <span>
          结果:
          <span dangerouslySetInnerHTML={{ __html: result }} />
        </span>
      </Space>
    </Card>
  );
};

export default RegExpTest;
