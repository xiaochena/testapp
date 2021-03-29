import { Button, Card } from 'antd';
import React, { useState } from 'react';
import ClassLifeCycle from './ClassComponent';
import HookLifeCycle from './HookComponent';

const ReactLifeCycle: React.FC = () => {
  const [showHook, setShowHook] = useState(false);
  const [showClass, setShowClass] = useState(false);
  return (
    <>
      <Card>
        <Button onClick={() => setShowHook(!showHook)}>显示/隐藏hook</Button>
        <span>{showHook && <HookLifeCycle />}</span>
      </Card>
      <Card>
        <Button onClick={() => setShowClass(!showClass)}>显示/隐藏Class</Button>
        <span>{showClass && <ClassLifeCycle />}</span>
      </Card>
    </>
  );
};
export default ReactLifeCycle;
