export default [
  {
    path: '/Toy',
    name: '小玩具',
    icon: 'rocket',
    routes: [
      {
        path: '/Toy/Canvas',
        name: 'canvas',
        component: './Toy/Canvas',
      },
      {
        path: '/Toy/ShakeAndThrottling',
        name: '防抖节流',
        component: './Toy/ShakeAndThrottling',
      },
    ],
  },
];
