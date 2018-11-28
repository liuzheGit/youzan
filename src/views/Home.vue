<template>
  <div class="home">
    <div class="topBanner">
      <Swiper :lists="myData"/>
    </div>
    <div>home</div>
  </div>
</template>

<script>
console.log("我会重新加载吗!");
import axios from 'axios';
import Swiper from '../components/Swiper'
export default {
  name: 'home',
  data(){
    return {
      myData: null
    }
  },
  components: {Swiper},
  created(){
    // this.get();
    let list = localStorage.getItem('bannerList');
    this.myData = JSON.parse(list);
    console.log('这里没次都从localstroage中获取banner')
  },
  methods: {
  }
}
</script>
