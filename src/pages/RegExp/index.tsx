import React, { ReactNode, useEffect, useState } from 'react';
import { Button, Card, Input, Space, Tag } from 'antd';

import RegExpTest from './RegExpTest';
import styles from './styles.less';

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

export default () => {
  return (
    <Card bodyStyle={{ padding: 0 }}>
      <RegExpDemo />
      <Card bodyStyle={{ padding: 0 }}>
        <div className={styles.regExp}>
          <Card>
            接触正则
            <RegExpTest regExp="[a-c]" str="yon lai che shi zz" />
            <RegExpTest regExp="a|z|d" str="yon lai che shi zz" />
            <RegExpTest regExp="[aid]" str="yon lai che shi zz11" />
            <RegExpTest regExp="(010|020)-\d{7,8}" str="010-1586083739" />
            <RegExpTest regExp="(010|158)-" str="010-608158-6083739" />
          </Card>
          <Card>
            转义 “.”
            有两个意思，一个代表除了换行符外的全部。一个是普通的点，通过转义让它代表普通的.
            <RegExpTest regExp="\d+\.\d+" str="25@26.26" />
            <RegExpTest
              regExp="https?:\/\/\w+\.\w+\.\w+"
              str="https://www.google.com"
            />
          </Card>
          <Card>
            字符边界约束 | 起始边界 &quot; ^ &quot; 结束边界 &quot; $ &quot;
            <RegExpTest regExp="^\d" str="010以数字开始010" />
            <RegExpTest regExp="\d" str="010不以数字开始010" />
            <RegExpTest regExp="^\d|\d$" str="010以数字结束010" />
          </Card>
          <Card>
            元字符 \d 匹配数字 \D 匹配除了数字以外的其他
            <RegExpTest regExp="\d+年" str="今年是2021年" />
            <RegExpTest regExp="\D+年" str="今年是2021年" />
          </Card>
          <Card>
            原子表中^表示除了，这里是除了数字&quot; \d &quot;我都要
            <RegExpTest regExp="[^\d]" str="今年是2021年" />
          </Card>
          <Card>
            元字符 \s 匹配空白 \S 匹配除了空白
            <RegExpTest regExp="\s" str="今年是   2021    年" />
            <RegExpTest regExp="\S" str="今年是   2021    年" />
          </Card>
          <Card>
            元字符 \w 匹配字母、数字、下划线 \W 匹配除了字母、数字、下划线
            <RegExpTest regExp="\w" str="今年是2_0_2_1year" />
            <RegExpTest regExp="\W" str="今年是2_0_2_1year" />
          </Card>
        </div>
      </Card>
    </Card>
  );
};
