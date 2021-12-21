export default [
  {
    path: '/Toy',
    name: '小玩具',
    icon: 'rocket',
    routes: [
      {
        path: '/Toy/Canvas',
        name: 'Canvas',
        component: './Toy/Canvas',
      },
      {
        path: '/Toy/MyCanvas',
        name: 'MyCanvas',
        component: './Toy/MyCanvas',
      },
      {
        path: '/Toy/ShakeAndThrottling',
        name: '防抖节流',
        component: './Toy/ShakeAndThrottling',
      },
    ],
  },
];
