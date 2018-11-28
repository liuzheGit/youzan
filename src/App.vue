<template>
  <div id="app">
    <div id="nav">
      <div class="topBanner">
        <Swiper :lists="myList"/>
      </div>
    </div>
    <router-view/>
    <NavBar />
  </div>
</template>
<script>
  import axios from 'axios';
  import Swiper from './components/Swiper'
  import NavBar from './components/NavBar'
  console.log('App页面');
  export default {
    data(){
      return {
        myList: null
      }
    },
    components:{Swiper, NavBar},
    created(){
      this.get();
    },
    methods: {
      get(){
        axios.get('http://rap2api.taobao.org/app/mock/119078/bannerList').then((response)=>{
          this.myList = response.data.list;
        })
      }
    }
  }
</script>
<style lang="sass">
  .topBanner
    width: 100%
</style>
