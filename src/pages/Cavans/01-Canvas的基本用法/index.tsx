import React, { useEffect, useRef } from 'react';
import { Card } from 'antd';

const Canvas_01: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const canvasRef3 = useRef<HTMLCanvasElement>(null);

  // #region  Canvas的基本用法
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
  // #endregion

  // #region Canvas绘制形状
  useEffect(() => {
    if (canvasRef2.current) {
      const canvas = canvasRef2.current;
      let ctx = canvas.getContext('2d');
      if (ctx) {
        // 绘制一个填充的矩形。fillRect(x, y, width, height)
        // 绘制一个矩形的边框。strokeRect(x, y, width, height)
        // 清除指定矩形区域，让清除部分完全透明。clearRect(x, y, width, height)
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
        /**
         * fillRect()函数绘制了一个边长为100px的黑色正方形。
         * clearRect()函数从正方形的中心开始擦除了一个60*60px的正方形，
         * 接着strokeRect()在清除区域内生成一个50*50的正方形边框。
         * */
      }
    }
  }, [canvasRef2]);
  // #endregion

  // #region Canvas绘制路径
  useEffect(() => {
    if (canvasRef3.current) {
      const canvas = canvasRef3.current;
      let ctx = canvas.getContext('2d');
      if (ctx) {
        // beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
        // closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。
        // stroke() 通过线条来绘制图形轮廓。
        // fill() 通过填充路径的内容区域生成实心的图形。
        ctx.beginPath();
        ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.lineTo(50, 25);
        // ctx.lineTo(10, 75);
        // ctx.fill();
        ctx.stroke();
      }
    }
  }, [canvasRef3]);
  // #endregion

  return (
    <div>
      <Card title="Canvas的基本用法">
        <canvas ref={canvasRef} />
      </Card>

      <Card title="Canvas绘制形状">
        <canvas ref={canvasRef2} />
      </Card>
      <Card title="Canvas绘制形状">
        <canvas ref={canvasRef3} />
      </Card>
    </div>
  );
};

export default Canvas_01;
