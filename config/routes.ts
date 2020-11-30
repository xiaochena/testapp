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
    icon: 'code',
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
  {
    path: '/Formily',
    name: 'Formily',
    icon: 'SlackOutlined',
    routes: [
      {
        path: '/Formily/01-初始Formily',
        name: '01-初识Formily',
        component: './Formily/01-初识Formily',
      },
      {
        path: '/Formily/02-Form Schema 联动协议',
        name: '02-Form Schema 联动协议x-linkages',
        component: './Formily/02-Form Schema 联动协议',
      },
    ],
  },
  {
    path: '/Echarts',
    name: '上手 ECharts',
    icon: 'SlackOutlined',
    routes: [
      {
        path: '/Echarts/上手 ECharts',
        name: '01-上手 ECharts',
        component: './Echarts/01-上手 ECharts',
      },
    ],
  },
];
