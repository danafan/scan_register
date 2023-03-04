<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    created() {
      this.$router.replace('/index');
    }
  }
</script>
<style lang="less" scoped>

</style>