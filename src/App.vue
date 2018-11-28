<template>
  <div id="app">
    <router-view/>
    <NavBar />
  </div>
</template>
<script>
  import axios from 'axios';
  import NavBar from './components/NavBar'
  console.log('App页面');
  import url from '@/assets/js/url.js'

  export default {
    data(){
      return {
        myList: null,
      }
    },
    components:{NavBar},
    created(){
      this.get();
    },
    methods: {
      get(){
        axios.get(url.bannerList).then((response)=>{
          this.myList = response.data.list;
          localStorage.setItem('bannerList', JSON.stringify(response.data.list))
        })
      }
    }
  }
</script>
<style lang="sass">
  .topBanner
    width: 100%
</style>
