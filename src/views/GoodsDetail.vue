<template>
  <div class="goodsDetail">
    <div class="topBanner">
      <Swiper :lists="bannerList"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from '../components/Swiper'
  import url from '@/assets/js/url.js'
  export default {
    name: "Detail",
    data(){
      return {
        goodsId: this.$route.params.id,
        description: '',  // 详情
        title: '',  // 标题
        originalPrice: null,  //老价格
        postage: '',  // 优惠
        price: null,  // 现价
        remain: null,  // 剩余
        sales: null,  //  卖出
        storeName: '',  // 商店名
        bannerList: [],  // banner图
        identification: [], //鉴定
        skuList: []  // sku
      }
    },
    components: {Swiper},
    created(){
      this.getDetail(this.goodsId);
    },
    methods: {
      getDetail(id){
        axios.get(url.goodsDetail,{id})
          .then((response)=>{
            let data = response.data.data;
            let status = response.data.status;
            if(status === 200){
              console.log(data);
              this.description = data.description;
              this.title = data.title;
              this.originalPrice = data.originalPrice;
              this.postage = data.postage;
              this.price = data.price;
              this.remain = data.remain;
              this.sales = data.sales;
              this.storeName = data.storeName;
              // 数组
              this.bannerList = data.imgs;
              this.identification = data.identification;
              this.skuList = data.skuList;
            }
        })
          .catch((error)=>{
            console.log(error)
          })
          .then(()=>{
            console.log('请求结束')
          })
      }
    }
  }
</script>

<style scoped lang="sass">
  .topBanner
    height: 300px
</style>