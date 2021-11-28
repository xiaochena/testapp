/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import './styles.less';

const MaskCanvas = () => {
  useEffect(() => {}, []);
  const onLoad = () => {
    type HTMLCanvasElementType = HTMLCanvasElement | null;
    let canvas: HTMLCanvasElementType = document.querySelector(
      '#canvas-overlay',
    );
    let lineCanvas: HTMLCanvasElementType = document.querySelector(
      '#canvas-lines',
    );

    if (canvas) {
      let canvasContext = canvas.getContext('2d');
      let lineCanvasContext = lineCanvas?.getContext?.('2d');
      let imageBg: HTMLImageElement | null = document.querySelector(
        '#image--bg',
      );
      let pointLifetime = 500;
      let isFirst = false;
      let points: any[] = [];

      if (canvasContext) {
        // FILL CANVAS
        canvasContext.fillStyle = 'rgba(0, 0, 0, 0.8)';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);

        // INIT
        function init() {
          const mainTopact: HTMLDivElement | null = document.querySelector(
            '.main-topact',
          );
          mainTopact?.addEventListener('mousemove', onMouseMove);
          // document.addEventListener('mousemove', onMouseMove);
          window.addEventListener('resize', resizeCanvases);
          resizeCanvases();
          tick();
        }

        init();

        //RESIZE CANVAS
        function resizeCanvases() {
          const mainTopact: HTMLDivElement | null = document.querySelector(
            '.main-topact',
          );
          if (canvas && lineCanvas && mainTopact) {
            canvas.width = lineCanvas.width = mainTopact.offsetWidth;
            canvas.height = lineCanvas.height = mainTopact.offsetHeight;
          }
        }

        function onMouseMove(event: MouseEvent) {
          let _points = {
            time: Date.now(),
            x: event.offsetX,
            y: event.offsetY + (document.documentElement.scrollTop || 0),
          };
          if (_points.y > 800) return;
          points.push(_points);
        }

        function tick() {
          // Remove old points
          let _len = points.length;
          points = points.filter(function(point) {
            let age = Date.now() - point.time;
            return age < pointLifetime;
          });

          requestAnimationFrame(tick);
          if (points.length == 0 && _len != 0) return;
          drawLineCanvas();
          drawImageCanvas();
        }

        function drawLineCanvas() {
          let minimumLineWidth = 70;
          let maximumLineWidth = 140;
          let lineWidthRange = maximumLineWidth - minimumLineWidth;
          let maximumSpeed = 70;
          if (lineCanvasContext && lineCanvas) {
            lineCanvasContext.clearRect(
              0,
              0,
              lineCanvas.width,
              lineCanvas.height,
            );
            lineCanvasContext.lineCap = 'round';
            lineCanvasContext.shadowBlur = 50;
            lineCanvasContext.shadowColor = '#000';

            for (let i = 1; i < points.length; i++) {
              let point = points[i];
              let previousPoint = points[i - 1];

              // Change line width based on speed
              let distance = getDistanceBetween(point, previousPoint);
              let speed = Math.max(0, Math.min(maximumSpeed, distance));
              let percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
              lineCanvasContext.lineWidth =
                minimumLineWidth + percentageLineWidth * lineWidthRange;

              // Fade points as they age
              let age = Date.now() - point.time;
              let opacity = (pointLifetime - age) / pointLifetime;
              lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';

              lineCanvasContext.beginPath();
              lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
              lineCanvasContext.lineTo(point.x, point.y);
              lineCanvasContext.stroke();
            }
          }
        }

        function getDistanceBetween(a: any, b: any) {
          return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        }

        function drawImageCanvas() {
          if (canvasContext && lineCanvas && imageBg && canvas) {
            canvasContext.globalCompositeOperation = 'source-over';
            canvasContext.drawImage(
              imageBg,
              0,
              0,
              1920,
              800,
              0,
              0,
              canvas.width,
              canvas.height,
            );
            canvasContext.save();
            // console.log(canvas.width);
            // canvasContext.fillStyle="rgba(0, 0, 0,0.65)";
            // canvasContext.globalAlpha = 0.009;
            // canvasContext.fillRect(0, 0, canvas.width, canvas.height);

            canvasContext.restore();
            canvasContext.globalCompositeOperation = 'destination-out';
            // console.log(lineCanvas.height)
            if (lineCanvas.height == 0) return resizeCanvases();
            imageBg.style.opacity = '0';
            canvasContext.drawImage(lineCanvas, 0, 0);
          }
        }
      }
    }
  };

  return (
    <div className="main-topact">
      <img
        onLoad={onLoad}
        id="image--bg"
        src="https://weirenwu.weibo.com/wrw/images/img/phtwall_blur.png?v=1589014457297"
      />
      <canvas id="canvas-overlay" />
      <canvas id="canvas-lines" />
    </div>
  );
};
export default MaskCanvas;
