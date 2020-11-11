import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const CoreJSX_1: React.FC = () => {
  return (
    <>
      <Card title="类的定义">
        <Paragraph>在ES6之前，我们通过function来定义类，</Paragraph>
        <Paragraph>
          <pre>{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + this.age + "running");
  }
}

const p = new Person("why", 18);
p.running();`}</pre>
        </Paragraph>
        <iframe
          src="https://codesandbox.io/embed/leidedingyi-6xns6?previewwindow=console&hidedevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&moduleview=1&theme=dark"
          style={{
            width: '100%',
            height: '500px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="类的定义"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Card>
    </>
  );
};

export default CoreJSX_1;
