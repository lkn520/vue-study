<template>
  <span class="img" v-lazy:background-image="imageUrl" :class="bgClass"></span>
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
  .img {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .bg-contain {
    background-size: contain;
  }
  .bg-cover {
    background-size: cover;
  }
</style>
