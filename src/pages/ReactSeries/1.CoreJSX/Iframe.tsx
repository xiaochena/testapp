import React from 'react';

const Iframe: React.FC = props => {
  return (
    <>
      <iframe
        src="https://codesandbox.io/embed/leidedingyi-6xns6?previewwindow=console&hidedevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&moduleview=1&theme=dark"
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title="类的定义"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        {...props}
      ></iframe>
    </>
  );
};
export default Iframe;
