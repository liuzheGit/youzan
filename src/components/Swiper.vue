<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="(list, index) in lists" :id="index">
        <a class="js-no-follow" href="#">
          <img class="goods-main-photo fadeIn" :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper/dist/js/swiper.js'
  export default {
    name:'Swipe',
    props:['lists'],
    created(){
    },
    mounted(){
      setTimeout(()=>{
        new Swiper('.swiper-container',{
          autoplay: true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        },100)
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .swiper-wrapper img
    width: 100%
    height: 100%
</style>
