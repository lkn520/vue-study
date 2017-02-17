<template>
  <span class="img" v-lazy:background-image="imageUrl" :class="bgClass" lazy="loading"></span>
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
<style>
  @import "img.less";
</style>
