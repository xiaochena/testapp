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
      {
        path: '/Formily/03-生命周期',
        name: '03-生命周期',
        component: './Formily/03-生命周期',
      },
    ],
  },
  {
    path: '/Echarts',
    name: '上手 ECharts',
    icon: 'SlackOutlined',
    routes: [
      {
        path: '/Echarts/00-工作中Echarts',
        name: '00-工作中Echarts',
        component: './Echarts/00-工作中Echarts',
      },
      {
        path: '/Echarts/01-上手ECharts',
        name: '01-上手ECharts',
        component: './Echarts/01-上手ECharts',
      },
      {
        path: '/Echarts/02-实现拖拽',
        name: '02-个性化图表的样式',
        component: './Echarts/02-实现拖拽',
      },
    ],
  },
];
