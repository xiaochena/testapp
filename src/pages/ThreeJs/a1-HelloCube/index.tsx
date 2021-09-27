import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HelloCube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef?.current) {
      /** 创建一个WebGL渲染器 */
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas });

      /** 创建一个透视摄像机(PerspectiveCamera)。 */
      const fov = 75;
      const aspect = 2; // 相机默认值、画布的宽高比。
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      /** 创建一个场景(Scene) */
      const scene = new THREE.Scene();

      const boxDepth = 1; // 长
      const boxWidth = 1; // 宽
      const boxHeight = 1; // 高
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      // MeshBasicMaterial材质不会受到灯光的影响。我们将他改成会受灯光影响的MeshPhongMaterial材质。
      // const material = new THREE.MeshBasicMaterial({ color: 'skyblue' });
      const material = new THREE.MeshPhongMaterial({ color: 'skyblue' }); // 绿蓝色

      /** 添加些光照效果 */
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);

      /** 创建一个网格(Mesh)对象 */
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube); // 将网格添加到场景中。

      const render = (time: number) => {
        let _time = time * 0.001; // 转换时间为秒
        cube.rotation.x = 0.5;
        cube.rotation.y = _time;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default HelloCube;
