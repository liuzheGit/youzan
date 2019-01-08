<template>
  <div class="goodsDetail">
    <div class="topBanner">
      <Swiper :lists="bannerList"/>
    </div>
    <div class="detailTitle">
      <p class="langTitle">{{title}}</p>
      <p class="price">￥{{price}}</p>
      <p><span class="deleteLine">{{originalPrice}}</span></p>
      <div class="detailFlex">
        <span>运费:{{postage}}</span>
        <span>剩余:{{remain}}</span>
        <span>销量:{{sales}}</span>
      </div>
    </div>

    <div class="sku-detail">
      <div class="detail-inner">
        <dl>
          <dt>选择: </dt>
          <dd>净含量</dd>
        </dl>
      </div>
    </div>
    <div class="detail-shop">
      <div class="shop-selector">
        <div class="selector-left">
          <div class="shop-icon"></div>
          <span>{{storeName}}</span>
        </div>
        <div class="selector-right">
          <span>进入店铺</span>
        </div>
      </div>
      <div class="shop-promise">
        <span v-for="(item, index) in identification" v-bind:id="index">{{item}}</span>
      </div>
      <div class="tabs">
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from '../components/Swiper'
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
        axios.get(this.$url.goodsDetail,{id})
          .then((response)=>{
            let data = response.data.data;
            let status = response.data.status;
            if(status === 200){
              // console.log(data);
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
            // console.log('请求结束')
          })
      }
    }
  }
</script>

<style scoped lang="sass">
  .goodsDetail
    background: #F8F8F8
    margin-bottom: 50px
    .detailTitle
      padding: 8px
      color: #999999
      background: #FFFFFF
      .langTitle
        color: #000
        margin-bottom: 1em
      .deleteLine
        text-decoration: line-through
        font-size: 12px
      .price
        color: #F64B46
      .detailFlex
        display: flex
        justify-content: space-between
        font-size: 12px
    .sku-detail
      margin: 10px 0
      padding: 8px
      background: #fff
      border-top: 1px solid #EFEFEF
      border-bottom: 1px solid #EFEFEF
      .detail-inner
        position: relative
        font-size: 14px
        dl
          display: flex
          dd
            margin-left: 4px
      ::after
        content: ''
        display: block
        width: 6px
        height: 12px
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAPFBMVEUAAACZmZmlpaWampqZmZmampqampqampqampqbm5ubm5ucnJyZmZmfn5+bm5uZmZmampqampqbm5uZmZnmDXU5AAAAE3RSTlMA8Qjo3dHCn4lPPi8jGA+ysXRhTrGNsAAAAFxJREFUGNNl0EcOwCAMRNEUekv5979r2Bgr4BVPQrbH27/Cq+8H4oCHPQmOqysPOTiLqFkwVVQN2CYqJ7hDlHe4BVvq8kMRCCv0mzZYW+tQXUcXnSNoOI09H2StDz/YBU9Q8POZAAAAAElFTkSuQmCC) no-repeat;
        background-size: 6px 12px
        position: absolute
        right: 5px
        top: 50%
        transform: translateY(-50%)
    .detail-shop
      padding: 8px
      border-top: 1px solid #EFEFEF
      border-bottom: 1px solid #EFEFEF
      background: #fff
      .shop-selector
        display: flex
        justify-content: space-between
        font-size: 14px
        .selector-left
          display: flex
          align-items: center
          .shop-icon
            height: 16px
            width: 16px
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAABRNJREFUaAXtmctrXHUUx+cRQxa2YhNTO8UnbjSkYjOTyUNR2uzCKEKjllYCGvoPhK5cGLsrtVAoFLTNIrEUbbuRJMRUGyg45jURalE33SShiYjURd04ZhI/Zzrn8ps7985M2vl1fMyFH+f8zu88vuf3uufOBAK1pzYD9zUDQS/rzc3NYHt7+8DGxsZ7wWCwhf42Lz3bMmLfIfaPxBlOpVLD9DfdMQsSaGtr24XSedo+t3I1+4C/Sju8sLDwi4kjZHZk5un/48ALRrDtp53PYXRg561ALBY7wrb5JDeahn7Y0NAwmkwmVx2LB8h0d3dH0ul0P5g+IuxDEjoUCh1hFc4qjLAyQiORyBnI7pzsg8XFxeMrKyt3cv0HTiT26urqt+D6i+A9AoAVaF5bWzunYNxb6AUdgI4afLXZEQNAi8EH8hJg4GEdZPbXlK82dWFxMAoudwLVxrrl+LUEtjxlFTaorUCFJ3TL7v5bK0CtkdEp6Ovrq1e+2tTEYmIUXHUmON5yt+g/KbLl5eVWyKLwfk88Ht+zvr7+Bk5/p112F1p+dpQsjxPrAO3Rurq6L+fm5n7w0xX50tLSHh3PYdRu/nsAENd1JJPJvKW8F41Go++gIwkew+lp6pXvqWT3eumaMtERXbERW/EhvkwdN49+n8pMjCLLOwM4/UwVoYM4fs3oO6zI0R2lmSu4C+dXGGt3FF0M4OPofI1YSvbsIz7EV7FYKA7m1KUWMjEG8qrRoaGh0NjYWBLlDjEgmJyJk+Fw+CJb5WeWezcz1o+To8j1jMgqPEFrpqnNWarGUezlY0SCtjCL/bAD8FpA/kp/hdZGkyeN/glijRDrFrGez+2CQcNmNpFIdINz464J8ZRR2tnZ+Rwl7DX6EZUVoVJmRwnaDMBpAu0oousMAfQ2Ce4DoCSRopUVq76+/tWZmZmbjiOYvC0kA6KA81dMJS8eEElmKS6F1vz8/HWSeBG9KS9dl2xKdMVGbMWH+HLpFHSxedkNXpQKVkAt2a/m96dUpjsIJDN+A3qut7d3wlxKteOG6WIl+mmyDZ/KyZewmaWNcFN9p7pKZetOTEz0YjOArBUqK3Kb5pwVkvXE6ikUx2YCfsaiZ/MpB0PBFrIJyIbvf30C5j1uY4ICsr/Hx8ffxvlB9nYU2kj7jfOQol3gMF+EmudtSzisrgAH+lnApwB+gZYAmRxKeX9E6L/O1fs5OvMdHR1PI7unx1oC/LL3DABnAfpSMWSMR3lxzXZ1demNVUy9YMxKArJteEldJtpjEpEtkuHdcpw7P8rvTNu502OIPxa5jJPETl6el6C+t6LoeT1WzgDbRgrBbGEnIGn7uf+vGQDk7Zti+3wFnQJ4mBajHjpA/5KhV5K1sgJEPWhEPukC7wwhvwrwUyog0UPKl0utJAAouW2yD1un6Iwy/oXqyiooXy61kgAzuVMBNDY23lDeizY1NTkfM6adl66XzEoCzKSWzIHJyck/vQKrzBw37XS8FLWSQKmglRz/fyRAVfhIJWetHF/8YLC9HL1iK/CHOuDF4/wqoDLblBdhqxHDwWLIsmyxBLLfs6JFSXDUbWi7z4F2PuS5nX7yi+ebAPfzsBrhLME2+vR+ii71VYpKTUSsM+i9qbok4GBRmVLf2gPQQV71V6A9qlwlOs1frD0k4Vly+66AGNDepX1TJeASdpp22A+8KPiugAzqQ5H1PisxgCPrf3oTo+Sf24qrRmszUIEZ+BsXxgP8QCOEqgAAAABJRU5ErkJggg==) no-repeat
            background-size: 16px 16px
            margin-right: 4px
        .selector-right
          position: relative
          padding-right: 18px
          color: #9C9C9C
          ::after
            content: ''
            display: block
            width: 6px
            height: 12px
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAPFBMVEUAAACZmZmlpaWampqZmZmampqampqampqampqbm5ubm5ucnJyZmZmfn5+bm5uZmZmampqampqbm5uZmZnmDXU5AAAAE3RSTlMA8Qjo3dHCn4lPPi8jGA+ysXRhTrGNsAAAAFxJREFUGNNl0EcOwCAMRNEUekv5979r2Bgr4BVPQrbH27/Cq+8H4oCHPQmOqysPOTiLqFkwVVQN2CYqJ7hDlHe4BVvq8kMRCCv0mzZYW+tQXUcXnSNoOI09H2StDz/YBU9Q8POZAAAAAElFTkSuQmCC) no-repeat;
            background-size: 6px 12px
            position: absolute
            right: 5px
            top: 50%
            transform: translateY(-50%)
      .shop-promise
        font-size: 12px
        padding: 10px 0 4px
        border-top: 1px solid #F3F3F3
        margin-top: 6px
        > span
          margin-right: 8px
        > span::before
          content: ''
          display: inline-block
          vertical-align: middle
          width: 13px
          height: 13px
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABLhJREFUWAntmE1oVUcYht9zE2OLG7spNNTuu25XNw2lTXJBLBixP3Rr47KWIrhohXZhuxBE1KU/24IaVKgUcpOqpLmrdu1eIYVu6qaoaXKP7zvnfNM5k8n15twIhubAvTNn5pvvfc43P2fmADvX/zQC2SDPfWARr608xYEcmKKft/gbLX9yu1z+HlCkPbIbt2+P429V1LlqgU4t4FCe40sKjiPHcF/CGVZpt5hluNCewI2+2gRGmwKd+hVj6OI0IZuBj01nCdtBAyfaH2Kp38Z9gX6SY+jRAs4Q8KvQMRt32e0dCt8cyvFHI8PyniHX5fhnDaOsHF3L8A7bTdO2SdtGpX2Gc3sncPxahrWwPJV/Luj0Heyl6FWKaRwWV4YnbHg+exVn5sbwlxX3SltLeD1/jOOEPcbh8orZ8iHbfLhPb36AR1aWSnuCOshVdOj8bd84w2xjF76eex8PfdkmMq172Nf9F2cJe9iaEeL+nmE0e8FuCFp29y8+khlyGp9sT+JHExgknZrHNwzAKQI7BkWWw2D/RsOgMmZC4XJMFt1NSBp+vlWQ0pEv+SQmeQEFRJrKp65kRDW78zX8Zg34tN9uJaT5Veoim+MHK8uG8F5qNUhHlEuQNeQTz74oSGk439TweqG2L4yWC5WXi3mxTnJ2a+IE9i8k6zSoJeccAk0xxELrIkpDvXHcxXFxvu7sNh9hSt8Zu/pSq43vw3JpSMvKQgYrq4Dq3c2KcVWyYVfrpBkOmgqytYCLTL/oAt/FsNKSZqkzXrJ42Qroygo+4hx0725OxU6/i7n3tkHGRXIBlwRpJlzr3rS8UmlJ05WRwbEEBhVQPo9/++i1GNjVzlokGYAj5oS+L89N4Kjd+7SBWz4fsKisAsqn3GeGendbvm6aiqRBMnXrZ+h7uIvf7T5kUVkFlPfaT7pLGwzL10kNMhXJFKQ0Ik3P4uoiCF9pu6CoHpoEk/O4LJC4zu7rQKptpOlZVBdven13PN21HkSQmrHqNK51WvNm4ujUhRSM09T2urg8i27jrv+zNMLqE7xheUu7wRhWlxJWM9lHdhBIaUSankV1Magfl9r0yiC8eISYIdYVXxbApiBlq9kdR923jzKRpmeRWaXrsxwPLd7ambP+rozskiCBZtTtfpIUsIVJsAQJUg/WL6QcrDbwrl/ygQeF0+K/GtEG2lZJoGnLh6mEU5H14DKuAek0ujhoWhxPnkVlFdCREfxMETecadjU8cEahmkS1gxqQkpLms4NGXS8NpdKK6DluXtRFRwCDZ1xlE9dSdiakPJfnqeMZzH+BmAVnoUAF+yGsMdaPOPYfZxWYAeAlIa0zH/I4MssE6bcii1xjFo3zM5P4uOwPs5rxqtM4HFdP/d8gVxnS3fYo48ON9Njcbt1EXUG/DjgDelAxwV/n8gIsC6k8x2cSDkY/9MOtJKgOrNQ+JzZMUynWvP4zO63KpVP+TZ/0kydl1SfBFWFvmCwYbFEsGv56vzpeZFVu34v+ZJPdrkNGx2XN568vRxviw8Q9gDb4pOOwW6Lj2QGq/Sl/+wYwjrgl/1DbgzsPo3r5MqDWHnG0dZQP13api1rR8a1pa19RPxadFY7fzsR6B2BZ3gZC5nkyYLJAAAAAElFTkSuQmCC")
          background-repeat: no-repeat
          background-size: 13px 13px
          margin-right: 2px
      .tabs
        padding: 4px
        width: 100%
        overflow: paged-x
        img
          width: 100% !important
        .custom-richtext
          border: 1px solid red
          & p img
            width: 100%

  .nav-bar
    display: none
</style>
<style>
  .custom-richtext img{
    width: 100%;
  }
</style>