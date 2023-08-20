import react from './react';
import formily from './formily';
import echarts from './echarts';
import toy from './toy';
import regExp from './regExp';
import cavans from './cavans';
import threeJs from './threeJs';
import css from './cssDemo';

export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: '欢迎',
    component: './Welcome',
    hideInMenu: true,
  },
  {
    path: '/welcome',
    name: '欢迎',
    component: './Welcome',
    hideInMenu: true,
  },
  ...react,
  ...formily,
  ...echarts,
  ...toy,
  ...regExp,
  ...cavans,
  ...threeJs,
  ...css,
];
