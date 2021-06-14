import React, { useEffect, useRef } from 'react';
import { Card } from 'antd';

const Canvas_01: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      let ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgb(200,0,0)';
        /**
         * fillRect方法绘制“已填色”的矩形。默认的填充颜色是黑色。
         * fillRect(x,y,width,height);
         */
        ctx.fillRect(10, 10, 55, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 55, 50);
      }
    }
  }, [canvasRef]);
  return (
    <div>
      <Card title="Canvas的基本用法">
        <canvas ref={canvasRef} />
      </Card>
    </div>
  );
};

export default Canvas_01;
