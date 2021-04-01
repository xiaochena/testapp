import React, { ReactNode, useEffect, useState } from 'react';
import { Button, Card, Input, Space, Tag } from 'antd';

const RegExpDemo: React.FC = () => {
  const [value, setValue] = useState('');
  const [match, setMatch] = useState('');
  const [result, setResult] = useState('-');

  useEffect(() => {
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

// #region
// const RegularDemo: React.FC<{ reg: RegExpMatchArray; str: string }> = () => {
//   const World = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
//   const [str, setStr] = useState('');

//   const onClick = () => {
//     let str = World.match(/[a-z]/g)?.join('') ?? '';
//     setStr(str);
//   };

//   return (
//     <div>
//       <Card>
//         <div>
//           <Space>
//             <span>{World}</span>
//             <span>{str}</span>
//           </Space>
//         </div>
//         <Button type="primary" onClick={onClick}>
//           匹配 (/[a-z]/g)
//         </Button>
//       </Card>
//     </div>
//   );
// };
// #endregion

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
          search => `<span style="color: red;">${search}</span>`,
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

export default () => {
  return (
    <div>
      <RegExpDemo />
      <RegExpTest regExp="[a-c]" str="yon lai che shi zz" />
    </div>
  );
};
