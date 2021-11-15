/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-invalid-this */
import React, { useEffect, useRef, useState } from 'react';

const ShakeAndThrottling = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const container = ref.current;
    if (container) {
      container.onclick = debounce(
        function(e) {
          console.log(this, 'this');
          console.log(e, 'e');
          setCount(v => v + 1);
        },
        // 1000,
        // true,
        { wait: 1000, immediate: true },
      );
      // container.onmousemove = function() {
      //   console.log(this, 'this');
      //   setCount(v => v + 1);
      // };
    }
  }, []);

  // 第一版:实现防抖
  function debounce1(func, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  // 第二版:绑定this指向,和参数
  function debounce2(func, wait) {
    let timeout;
    return function(...argu) {
      const _this = this;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(_this, argu);
      }, wait);
    };
  }

  // 第三版本：增加功能。立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行
  function debounce3(func, options) {
    let timeout;

    return function() {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (options?.immediate) {
        // 如果已经执行过，不再执行
        let callNow = !timeout;
        timeout = setTimeout(function() {
          timeout = null;
        }, options?.wait);
        if (callNow) func.apply(context, args);
      } else {
        timeout = setTimeout(function() {
          func.apply(context, args);
        }, options?.wait);
      }
    };
  }

  // 第四版本：返回值和取消
  // 第六版
  function debounce(func, wait, immediate) {
    let timeout;
    let result;

    let debounced = function() {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        // 如果已经执行过，不再执行
        let callNow = !timeout;
        timeout = setTimeout(function() {
          timeout = null;
        }, wait);
        if (callNow) result = func.apply(context, args);
      } else {
        timeout = setTimeout(function() {
          func.apply(context, args);
        }, wait);
      }
      return result;
    };

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
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
