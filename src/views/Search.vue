<template>
  <div class="Search">
    搜索页
    <div class="test">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="1">
        <div v-for="item in list">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Search',
    data(){
      return {
        loading: false,
        list: ['123','123','7897','123','123','7897','123','123','7897']
      }
    },
    methods: {
      loadMore() {
        console.log('search触发')
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    }
  }
</script>

<style scoped>

</style>
