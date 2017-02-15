<template>
  <rd-swipe :swipe="swipe" ref="rdSwipe">
    <div class="rd-swipe-item" v-for="(img, index) in images">
      <v-img :imageUrl="img.url" :size="'contain'"></v-img>
    </div>
  </rd-swipe>
</template>
<script>
  import rdSwipe from 'vue-slide/vue-slide.vue'
  import vImg from '../img/img.vue'
  export default {
    data () {
      return {
        swipe: {
          activeIndex: 1,
          pagination: false
        },
        images: []
      }
    },
    components: {
      rdSwipe,
      vImg
    },
    mounted () {
      this.getDetail()
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.$store.commit('update_scroll', true)
        vm.$store.commit('update_header', false)
      })
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('update_scroll', false)
      this.$store.commit('update_header', true)
      next()
    },
    methods: {
      getDetail () {
        let gid = this.$route.params.gallery_id
        this.$http.jsonp('http://tu.duowan.com/index.php?r=show/getByGallery', {params: {gid: gid}}).then((response) => {
          this.images = response.data.picInfo
          this.$nextTick(() => {
            this.$refs.rdSwipe.init()
          })
        }, (response) => {
          console.log(response.state)
        })
      }
    }
  }
</script>
<style lang="less">
  @import 'detail.less';
  .rd-swipe {
    position: fixed !important;
    z-index: 10 !important;
    width: 100% !important;
    height: 100% !important;
    background-color: #333 !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
