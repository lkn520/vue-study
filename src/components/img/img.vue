<template>
  <span class="img" v-bind:style="{backgroundImage: 'url('+imageUrl+')'}" :class="bgClass"></span>
</template>
<script>
  export default {
    data () {
      return {
        bgClass: 'bg-' + this.size
      }
    },
    props: {
      imageUrl: {
        type: String
      },
      size: {
        type: String,
        default: 'cover'
      }
    }
  }
</script>
<style lang="less">
  @import "img.less";
</style>
