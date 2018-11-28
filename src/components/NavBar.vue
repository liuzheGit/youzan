<template>
  <div class="nav-bar">
    <router-link
      v-for="(item, index) in lists"
      v-bind:id="index"
      v-bind:to="item.name"
      class="li-btn"
      >
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="item.icon"></use>
        </svg>
        <span>{{item.text}}</span>
     </router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return {
        lists: [
          {name: '/', icon: '#icon-youzan', text: '有赞'},
          {name: '/search', icon: '#icon-search', text: '分类'},
          {name: '/car', icon: '#icon-gouwuche', text: '购物车'},
          {name: '/person', icon: '#icon-rentou', text: '我'}
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
  .nav-bar
    position: fixed
    bottom: 0
    width: 100%
    height: 2rem
    display: flex
    justify-content: space-between
    align-items: center
    background: #fff
    border-top: 1px solid #F2F2F2
    .li-btn
      height: 100%
      flex: 1 1 auto
      text-align: center
      font-size: 1.4rem
      display: flex
      flex-direction: column
      align-items: center
      color: #000
      /*svg*/
        /*fill: #000*/
      &.active svg
        fill: #FC5959
      span
        font-size: 12px
</style>