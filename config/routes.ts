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
  {
    path: '/react_series',
    name: 'React系列',
    routes: [
      {
        path: '/react_series/1.CoreJSX',
        name: '核心JSX',
        component: './ReactSeries/1.CoreJSX',
      },
      {
        path: '/react_series/use_state_callback',
        name: 'useStateCallback',
        component: './ReactSeries/useStateCallback',
      },
    ],
  },
];
