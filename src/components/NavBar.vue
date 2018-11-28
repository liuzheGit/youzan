<template>
  <div class="nav-bar">
    <router-link to="/" class="li-btn active">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youzan"></use>
      </svg>
    </router-link>
    <router-link to="/search" class="li-btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </router-link>
    <router-link to="/car" class="li-btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
    </router-link>
    <router-link to="/person" class="li-btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-rentou"></use>
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
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
    .li-btn
      display: block
      height: 100%
      flex: 1 1 auto
      text-align: center
      font-size: 1.4rem
      svg
        fill: #000
      &.active svg
        fill: red
</style>