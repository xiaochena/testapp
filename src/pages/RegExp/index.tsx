import React, { ReactNode, useEffect, useState } from 'react';
import { Button, Card, Input, Space, Tag } from 'antd';

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

export default () => {
  return (
    <div>
      <RegExpDemo />
      <RegExpTest regExp="[a-c]" str="yon lai che shi zz" />
      <RegExpTest regExp="a|z|d" str="yon lai che shi zz" />
      <RegExpTest regExp="[aid]" str="yon lai che shi zz11" />
      <RegExpTest regExp="(010|020)-\d{7,8}" str="010-1586083739" />
      <RegExpTest regExp="(010|158)-" str="010-608158-6083739" />
      转义 “.”
      有两个意思，一个代表除了换行符外的全部。一个是普通的点，通过转义让它代表普通的.
      <RegExpTest regExp="\d+\.\d+" str="25@26.26" />
      <RegExpTest
        regExp="https?:\/\/\w+\.\w+\.\w+"
        str="https://www.google.com"
      />
      字符边界约束 | 起始边界 &quot; ^ &quot;
      <RegExpTest regExp="^\d" str="010以数字开始010" />
      <RegExpTest regExp="\d" str="010不以数字开始010" />
      结束边界 &quot; $ &quot;
      <RegExpTest regExp="^\d|\d$" str="010以数字结束010" />
      元字符 \d 匹配数字
      <RegExpTest regExp="\d+年" str="今年是2021年" />
      \D 匹配除了数字以外的其他
      <RegExpTest regExp="\D+年" str="今年是2021年" />
      原子表中^表示除了，这里是除了数字&quot; \d &quot;我都要
      <RegExpTest regExp="[^\d]" str="今年是2021年" />
      元字符 \s 匹配空白
      <RegExpTest regExp="\s" str="今年是   2021    年" />
      \S 匹配除了空白
      <RegExpTest regExp="\S" str="今年是   2021    年" />
      元字符 \w 匹配字母、数字、下划线
      <RegExpTest regExp="\w" str="今年是2_0_2_1year" />
      \W 匹配除了字母、数字、下划线
      <RegExpTest regExp="\W" str="今年是2_0_2_1year" />
    </div>
  );
};
