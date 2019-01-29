<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import axios from 'axios';

  // console.log('App页面');

  export default {
    data(){
      return {
        myList: null,
      }
    },
    // components:{NavBar},
    created(){
      this.get();
    },
    methods: {
      get(){
        axios.get(this.$url.bannerList).then((response)=>{
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
