import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

function initApp() {
  createApp(App).use(store).use(router).mount('#app');
}

async function init() {
  // 应用初始化前其他操作

  initApp();
}

init();
