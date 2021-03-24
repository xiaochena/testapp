import React, { useEffect, useReducer } from 'react';
import { Button } from 'antd';

const initialState = { count: 0 };
const type = { increment: 'increment', decrement: 'decrement' };
type stateType = typeof initialState;
interface IActionType {
  type: 'increment' | 'decrement';
}

const ReducerHook = () => {
  function reducer(state: stateType, action: IActionType) {
    switch (action.type) {
      case type.increment:
        return { count: state.count + 1 };
      case type.decrement:
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'increment' })}>加 1</Button>
      Count: {state.count}
      <Button onClick={() => dispatch({ type: 'decrement' })}>减 1</Button>
    </div>
  );
};
export default ReducerHook;
