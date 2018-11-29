import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 添加mint-ui 的 滚动到底部 加载
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import '@/assets/css/reset.css'
import '@/assets/css/common.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
