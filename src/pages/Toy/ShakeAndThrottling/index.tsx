/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';

const ShakeAndThrottling = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const container = ref.current;
    if (container) {
      container.onmousemove = debounce(function() {
        console.log(this, 'this');
        setCount(v => v + 1);
      }, 1000);
      // container.onmousemove = function() {
      //   console.log(this, 'this');
      //   setCount(v => v + 1);
      // };
    }
  }, []);

  // 第一版
  function debounce(func: () => void, wait: number) {
    let timeout: NodeJS.Timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func();
      }, wait);
    };
  }

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={ref}
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default ShakeAndThrottling;
