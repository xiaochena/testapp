import React, { useState } from 'react';
import { Card, Button } from 'antd';
import useStateCallback from './useStateCallback';

const StateCallback: React.FC = () => {
  const [number, setNumber] = useStateCallback(1);
  const [numberAdd, setNumberAdd] = useState(1);

  const onClick = () => {
    setTimeout(() => {
      setNumber(number ? number + 1 : 1, (value: any) => {
        console.log(value, 'value');
        setNumberAdd(value + 1);
      });
    }, 0);
  };

  return (
    <Card>
      <Button onClick={onClick}>使用useStateCallback</Button>
      <div>
        <span>number:</span>
        <span>{number}</span>
      </div>
      <div>
        <span>number+:</span>
        <span>{numberAdd}</span>
      </div>
    </Card>
  );
};
export default StateCallback;
