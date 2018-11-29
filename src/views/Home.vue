<template>
  <div class="home">
    <div class="topBanner">
      <Swiper :lists="myData"/>
    </div>
    <div class="shopList">
      <div class="shop-title">
        优店推荐
      </div>
      <div>
        三个图片
      </div>
    </div>
    <div class="goodTitle">
      <div class="title-left title-bar"></div>
      <div class="title-content">最热商品推荐</div>
      <div class="title-right title-bar"></div>
    </div>
    <div class="goodList"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="50">
      <div class="goods" v-for="goods in goodsLists" v-bind:id="goods.id">
        <div class="goodsImg">
          <img v-bind:src="goods.img">
        </div>
        <div class="goodsDes">
          <span class="goodsName">{{goods.name}}</span>
          <span class="goodsPrice">￥{{goods.price}}</span>
        </div>
      </div>
      <div class="loadingMore" v-show="loading"><span></span></div>
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
      goodsLists: [],
      loading: false
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
    },
    loadMore() {
      this.loading = true;
      if(this.goodsLists.length < 60){
          setTimeout(()=>{
            axios.get(url.goodsLists).then((response) =>{
              let currentList = response.data.list;
              this.goodsLists = this.goodsLists.concat(currentList);

              this.loading = false;

            });
          },2000);
      }else{
        this.loading = false
      }

    }
  }
}
</script>
<style scoped lang="sass">
  .goodTitle
    display: flex
    justify-content: space-between
    align-items: center
    margin: 4px 0
    .title-bar
      height: 1px
      margin: 0 10px
      background: #D5D2D5
      flex: 1
  .goodList
    width: 100%
    padding: 0 8px
    margin-bottom: 2.5rem
    display: flex
    flex-wrap: wrap
    .goods
      flex: 1 1 auto
      background: #eee
      .goodsDes
        padding: 0 4px
        display: flex
        justify-content: space-between
        .goodsPrice
          color: red
    .loadingMore
      width: 100%
      padding: 10px 10px
      vertical-align: middle
      text-align: center
      color: #999
      font-size: 12px
      line-height: 20px
      -webkit-box-sizing: border-box
      box-sizing: border-box
      >span
        display: inline-block
        margin-top: 10px
        width: 16px
        height: 16px
        background: url(https://b.yzcdn.cn/v2/image/loader.gif) no-repeat 50%
        background-size: 16px 16px
</style>
