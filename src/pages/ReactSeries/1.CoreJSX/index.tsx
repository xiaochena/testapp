import React, { useEffect } from 'react';
import { Card, Typography, Row, Col } from 'antd'; // @ts-ignore
import hljs from 'highlight.js/lib/core'; // @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/atom-one-dark.css';

import Iframe from './Iframe';

hljs.registerLanguage('javascript', javascript);
const { Paragraph } = Typography;

const CoreJSX_1: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block: any) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  return (
    <>
      <Card title="类的定义">
        <Row gutter={16}>
          <Col span={10}>
            <Paragraph>
              在ES6之前，我们通过function来定义类,
              <br />
              然鹅，大多数面向对象的语言，都是使用class关键字来定义类的。
              而JavaScript也从ES6开始引入了class关键字，用于定义一个类。
            </Paragraph>
            <pre>
              <code>
                {`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log(this.name + this.age + "running");
};

var p = new Person("Chen", 18);
p.running();`}
              </code>
            </pre>
          </Col>
          <Col span={14}>
            <Iframe />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CoreJSX_1;
