
import Layout from '../views/Layout';
import Test from '../views/Test';
import Welcome from '../views/Welcome';
import Hello from '../views/Hello';

export default [
  {
    path: '/',
    name: '首页',
    component: Layout,
    routes: [
      {
        path: '/Test',
        component: Test,
        icon: 'user',
        name: '欢迎页',
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
    ],
  },
];
