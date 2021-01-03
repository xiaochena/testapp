import React, { CSSProperties } from 'react';

interface ChartProps {
  style: CSSProperties;
}

const Chart: React.FC<ChartProps> = (props: any) => {
  return <div {...props}></div>;
};

export default Chart;
