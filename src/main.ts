/*
 * @Description: file content
 * @Author:
 * @Date: 2022-08-08 11:00:07
 * @LastEditors: Xiaochun liu
 * @LastEditTime: 2022-08-11 15:47:23
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';

function initApp() {
  const app = createApp(App);
  app.use(store);
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(router);
  app.use(ElementPlus);
  app.mount('#app');
}

async function init() {
  // 应用初始化前其他操作

  initApp();
}

init();
