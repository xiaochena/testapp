import React, { useRef } from 'react';
import styles from './styles.less';

const src =
  'https://weirenwu.weibo.com/wrw/images/img/phtwall_blur.png?v=1589014457297';

const url =
  'https://weirenwu.weibo.com/wrw/images/img/phtwall.png?v=1589014457297';

const MyCanvas = () => {
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const lineCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageBgRef = useRef<HTMLImageElement>(null);
  const topActRef = useRef<HTMLDivElement>(null);

  const onLoad = () => {
    /** 遮罩层cavans、负责绘画图片、将模糊的图片画在cavans上 */
    const overlayCanvas = overlayCanvasRef.current;
    /** 线条cavans、 负责绘画线条 */
    const lineCanvas = lineCanvasRef.current;
    /** 模糊层的背景图图片、用于提供模糊的背景 */
    const imageBg = imageBgRef.current;
    /** 父级div、具有背景图清晰的一面 */
    const topAct = topActRef.current;

    if (overlayCanvas && imageBg && topAct && lineCanvas) {
      const overlayCanvasContext = overlayCanvas.getContext('2d');
      overlayCanvas.width = lineCanvas.width = topAct.offsetWidth;
      overlayCanvas.height = lineCanvas.height = topAct.offsetHeight;
      overlayCanvasContext?.drawImage(
        imageBg,
        0,
        0,
        1820,
        800,
        0,
        0,
        overlayCanvas.width,
        overlayCanvas.height,
      );

      const lineCanvasContext = lineCanvas.getContext('2d');
      if (lineCanvasContext && overlayCanvasContext) {
        lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
        lineCanvasContext.clearRect(0, 0, 400, 300);
        lineCanvasContext.lineCap = 'round';
        lineCanvasContext.shadowBlur = 80;
        lineCanvasContext.shadowColor = '#000';
        // lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        lineCanvasContext.lineWidth = 70;
        lineCanvasContext.beginPath();
        lineCanvasContext.moveTo(160, 20);
        lineCanvasContext.lineTo(260, 130);
        lineCanvasContext.stroke();

        /** 通过设置globalCompositeOperation在overlay上绘制line形成透明 */
        overlayCanvasContext.globalCompositeOperation = 'destination-out';
        overlayCanvasContext.drawImage(lineCanvas, 0, 0);
      }
    }
  };

  return (
    <div
      ref={topActRef}
      className={styles.myCanvas}
      style={{ backgroundImage: `url(${url})` }}
    >
      <img
        ref={imageBgRef}
        onLoad={onLoad}
        className={styles.imageBg}
        src={src}
      />
      <canvas ref={overlayCanvasRef} className={styles.canvasOverlay} />
      <canvas ref={lineCanvasRef} className={styles.canvasLines} />
    </div>
  );
};

export default MyCanvas;
