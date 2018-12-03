<template>
  <div class="Search">
    搜索页

    <nav-bar />
  </div>
</template>
<script>
  import NavBar from '../components/NavBar'
  export default {
    name: 'Search',
    data(){
      return {
        loading: false
      }
    },
    components: {NavBar},
    methods: {


    }
  }
</script>

<style scoped>

</style>
