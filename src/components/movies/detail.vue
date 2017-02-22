<template>
  <div class="movie-detail" v-if="movie">
    <div class="movie-block">
      <div class="movie-images">
        <v-Img :imageUrl="movie.images.large" :size="'contain'"></v-Img>
      </div>
      <div class="movie-title">
        <span>{{movie.title}}&nbsp;({{movie.year}})</span>
      </div>
      <div class="movie-group">
        <div class="head">
          <span>故事简介</span>
        </div>
        <div class="body">
          <p>{{movie.summary}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vImg from '../img/lazyImg.vue'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        movie: false
      }
    },
    components: {
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
        let id = this.$route.params.id
        this.$http.jsonp(`https://api.douban.com/v2/movie/subject/${id}`).then((response) => {
          this.movie = response.data
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$el)
            } else {
              this.scroll.refresh()
            }
          })
        }, (response) => {
          console.log(response.status)
        })
      }
    }
  }
</script>
<style lang="less">
  @import "detail.less";
</style>
