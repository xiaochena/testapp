import React, { useEffect } from 'react';

const Brothers = () => {
  console.log('兄弟');
  useEffect(() => {
    console.log('兄弟的useEffect');
    return () => {
      console.log('卸载兄弟');
    };
  }, []);
  return <>brothers</>;
};

const Son = () => {
  console.log('儿子');
  useEffect(() => {
    console.log('儿子的useEffect');
    return () => {
      console.log('卸载儿子');
    };
  }, []);
  return <>Son</>;
};

const Father = () => {
  let i = 0;
  while (i < 5000000000) {
    i++;
  }
  console.log(i, 'i');

  console.log('父亲');
  useEffect(() => {
    console.log('父亲的useEffect');
    return () => {
      console.log('卸载父亲');
    };
  }, []);
  return (
    <>
      <Brothers />
      <Son />
    </>
  );
};
const Mother = () => {
  console.log('母亲');
  useEffect(() => {
    console.log('母亲的useEffect');
    return () => {
      console.log('卸载母亲');
    };
  }, []);
  return (
    <>
      <Son />
    </>
  );
};

const HookLifeCycle: React.FC = () => {
  console.log('爷爷');
  useEffect(() => {
    console.log('爷爷的useEffect');
    return () => {
      console.log('卸载爷爷');
    };
  }, []);
  return (
    <>
      <Father />
      <Mother />
    </>
  );
};

export default HookLifeCycle;
