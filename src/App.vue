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
        axios.get('http://rap2api.taobao.org/app/mock/119078/bannerList').then((response)=>{
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
