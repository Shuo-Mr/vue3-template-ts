/*
 * @Description: file content
 * @Author:
 * @Date: 2022-08-08 11:00:07
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-08 15:11:41
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/Demo'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
