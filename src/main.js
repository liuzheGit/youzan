import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import url from '@/assets/js/url'

// 添加mint-ui 的 滚动到底部 加载
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import '@/assets/css/reset.css'
import '@/assets/css/common.css'

Vue.config.productionTip = false;

Vue.mixin({
  beforeCreate(){
    if(!this.$url){
      this.$url = url;
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
