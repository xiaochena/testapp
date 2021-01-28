import React, { useEffect, useRef, useState } from 'react';
import style from './style.less';

interface iPoint {
  time: number;
  x: number;
  y: number;
}

const IMG =
  'http://cdn.xiaochena.com/usr/themes/Mirages//images/article/article-001.png';
const MaskCanvas = () => {
  const [points, setPoints] = useState<iPoint[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   if (canvasRef.current && imageRef.current) {
  //     const canvas = canvasRef.current;
  //     const imageBg = imageRef.current;
  //     const canvasContext = canvas.getContext('2d');
  //     //FILL CANVAS
  //     if (canvasContext) {
  //       // 设置画布的背景色以及背景大小
  //       canvasContext.fillStyle = 'rgba(0, 0, 0, 0.8)'; // fillStyle(color|gradient|pattern)
  //       canvasContext.fillRect(0, 0, canvas.width, canvas.height); // fillRect(x,y,width,height)
  //     }
  //     //INIT
  //     function init() {
  //       document.addEventListener('mousemove', onMouseMove);
  //       window.addEventListener('resize', resizeCanvases);
  //       resizeCanvases();
  //       tick();
  //     }
  //     init();

  //     function onMouseMove(event: MouseEvent) {
  //       // let _points = {
  //       //   time: Date.now(),
  //       //   x: event.clientX,
  //       //   y: event.clientY + (document.documentElement.scrollTop || 0),
  //       // };
  //       // if (_points.y > 800) return;
  //       // setPoints([...points, _points]);
  //       // console.log(_points, 'points');
  //     }

  //     function resizeCanvases() {}

  //     function tick() {
  //       drawImageCanvas();
  //     }

  //     function drawImageCanvas() {
  //       const img = new Image(); //创建一个Image对象，实现图片的预下载
  //       img.src = IMG;
  //       if (canvasContext) {
  //         canvasContext.globalCompositeOperation = 'source-over';
  //         img.onload = () => {
  //           canvasContext.drawImage(img, 10, 10, 100, 100);
  //         };
  //         canvasContext.save();
  //         canvasContext.restore();
  //         canvasContext.globalCompositeOperation = 'destination-out';
  //         // imageBg.style.opacity = '0';
  //       }
  //     }
  //   }
  // }, [canvasRef]);

  const imageOnload = () => {
    if (canvasRef.current && imageRef.current) {
      const canvas = canvasRef.current;
      const imageBg = imageRef.current;
      const canvasContext = canvas.getContext('2d');
      //FILL CANVAS
      if (canvasContext) {
        // 设置画布的背景色以及背景大小
        canvasContext.fillStyle = 'rgba(0, 0, 0, 0.8)'; // fillStyle(color|gradient|pattern)
        canvasContext.fillRect(0, 0, canvas.width, canvas.height); // fillRect(x,y,width,height)
      }
      //INIT
      function init() {
        document.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', resizeCanvases);
        resizeCanvases();
        tick();
      }
      init();

      function onMouseMove(event: MouseEvent) {
        // let _points = {
        //   time: Date.now(),
        //   x: event.clientX,
        //   y: event.clientY + (document.documentElement.scrollTop || 0),
        // };
        // if (_points.y > 800) return;
        // setPoints([...points, _points]);
        // console.log(_points, 'points');
      }

      function resizeCanvases() {}

      function tick() {
        drawImageCanvas();
      }

      function drawImageCanvas() {
        const img = new Image(); //创建一个Image对象，实现图片的预下载
        img.src = IMG;
        if (canvasContext) {
          canvasContext.globalCompositeOperation = 'source-over';
          img.onload = () => {
            console.log('完成');

            canvasContext.drawImage(img, 0, 0, 100, 100);
          };
          canvasContext.save();
          canvasContext.restore();
          canvasContext.globalCompositeOperation = 'destination-out';
          // imageBg.style.opacity = '0';
        }
      }
    }
  };

  return (
    <div id={style.maskCanvas}>
      <img
        className={style.img}
        onLoad={imageOnload}
        src={IMG}
        ref={imageRef}
      />
      <canvas className={style.canvas} ref={canvasRef}></canvas>
    </div>
  );
};
export default MaskCanvas;
