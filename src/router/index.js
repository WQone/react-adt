import AsyncCompnent from './AsyncComponent';

const Test = AsyncCompnent(() => import('../views/Test'));
const Welcome = AsyncCompnent(() => import('../views/Welcome'));
const Hello = AsyncCompnent(() => import('../views/Hello'));

export default [
  {
    path: '/Test',
    component: Test,
    icon: 'user',
    name: '欢迎页1',
  },
  {
    path: '/Welcome',
    component: Welcome,
    icon: 'instagram',
    name: '导航一',
  },
  {
    path: '/Hello',
    component: Hello,
    icon: 'dashboard',
    name: '导航二',
  },
];
