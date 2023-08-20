import React from 'react';
import styles from './styles.less';
import { red } from '@ant-design/colors';

const HorizontalScroll = () => {
  const arr = Array.from({ length: 10 });
  return (
    <div className={styles.horizontalScroll}>
      <div className={`${styles.animationBox} ${styles.animateFlowScroll}`}>
        {arr.concat(arr).map((_, index) => {
          return (
            <span
              key={index}
              className={styles.item}
              style={{ backgroundColor: red[index % 10] }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalScroll;
