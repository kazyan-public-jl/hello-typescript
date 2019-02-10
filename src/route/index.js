import VueRouter from 'vue-router';
// ページコンポーネントを読み込み
import Top from '../pages/top';
import About from '../pages/about';
import TS_Tutorials from '../pages/TS_tutorials';

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/ts_tutorials',
    component: TS_Tutorials
  },
];

export default new VueRouter({
  routes,
});