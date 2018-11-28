<template>
  <div class="home">
    <div class="topBanner">
      <Swiper :lists="myData"/>
    </div>
    <div>home</div>
    <div class="goodList">

    </div>
  </div>
</template>

<script>
console.log("我会重新加载吗!");
import axios from 'axios';
import Swiper from '../components/Swiper'
import url from '@/assets/js/url.js'
console.log(url);
export default {
  name: 'home',
  data(){
    return {
      myData: null,
      goodsList: null
    }
  },
  components: {Swiper},
  created(){
    this.get();
    let list = localStorage.getItem('bannerList');
    this.myData = JSON.parse(list);
    console.log('这里没次都从localstroage中获取banner')
  },
  methods: {
    get(){
      axios.get(url.goodsLists).then((response) =>{
        this.goodsLists = response.data.list;
        console.log(this.goodsLists)
      })
    }
  }
}
</script>
