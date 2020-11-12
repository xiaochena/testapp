import { useEffect, useRef, useState } from 'react';

const useStateCallback = (State?: any) => {
  const [state, setState] = useState(State);
  const stateRef = useRef<any>();

  useEffect(() => {
    stateRef.current && stateRef.current(state);
  }, [state]);

  const useCallBack = (newState: any, callBack?: (value?: any) => void) => {
    setState(newState);
    if (callBack && stateRef) {
      stateRef.current = callBack;
    }
  };

  return [state, useCallBack];
};

export default useStateCallback;
