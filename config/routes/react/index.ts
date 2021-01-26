export default [
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
        path: '/react_series/React生命周期',
        name: 'React生命周期',
        component: './ReactSeries/React生命周期',
      },
      {
        path: '/react_series/Redux',
        name: 'Redux',
        component: './ReactSeries/Redux',
      },
      {
        path: '/react_series/use_state_callback',
        name: 'useStateCallback',
        component: './ReactSeries/useStateCallback',
      },
    ],
  },
];
