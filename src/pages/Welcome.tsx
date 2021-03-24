import React from 'react';

import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => (
  <>
    <Card>
      <Alert
        message="随便写写Demo"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        随便写写Demo
        <a
          href="https://www.npmjs.com/package/schema-page"
          rel="noopener noreferrer"
          target="__blank"
        >
          欢迎使用
        </a>
      </Typography.Text>
      <CodePreview>yarn</CodePreview>
      <CodePreview>yarn start</CodePreview>
    </Card>
  </>
);
