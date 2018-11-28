<template>
  <div class="home">
    <Swiper :lists="bannerList" />
    <div class="test">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-rentou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youzan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Swiper
  },
  data(){
    return {
      bannerList: null
    }
  },
  created(){
    this.getBannerList();
  },
  methods: {
    getBannerList(){
      axios.get('http://rap2api.taobao.org/app/mock/119078/bannerList').then((response)=>{
        this.bannerList = response.data.list;
      })
    }
  }
}
</script>
