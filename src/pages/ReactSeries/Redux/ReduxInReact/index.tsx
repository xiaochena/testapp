import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';

import store from './store';

const ReduxInReact: React.FC = () => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    // 当前时刻的 State，可以通过store.getState()拿到。
    setState(store.getState());
    console.log('第一次effect只会执行这里的setState');

    // Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
    const unSubscribe = store.subscribe(() => {
      setState(store.getState());
      console.log(store.getState(), 'getState()');
    });

    return () => {
      // 解除监听
      unSubscribe();
      console.log('解除监听');
    };
  }, []);

  const addState = () => {
    // store.dispatch()是 View 发出 Action 的唯一方法。
    store.dispatch({ type: 'ADD', add: 5 });
  };
  const subState = () => {
    store.dispatch({ type: 'SUB', sub: 3 });
  };

  return (
    <>
      <Card title="原始Redux在React中的使用">
        <div>number:{state?.number}</div>
        <Button onClick={addState}>增加</Button>
        <Button onClick={subState}>减少</Button>
      </Card>
    </>
  );
};
export default ReduxInReact;
