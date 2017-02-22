<template>
  <div class="loading" v-show="show"></div>
</template>
<script>
  export default {
    props: {
      show: {
        type: Boolean
      }
    }
  }
</script>
<style lang="less">
  @import "loading.less";
</style>
