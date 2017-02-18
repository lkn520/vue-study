<template>
  <div class="movie">
    <div class="movie-item" v-for="movie in movies">
      <div class="movie-group clear-both">
        <div class="movie-left">
          <div class="movie-cover">
            <v-img :imageUrl="movie.images.large"></v-img>
          </div>
        </div>
        <div class="movie-right">
          <div class="movie-title movie-rows">
            <span>{{movie.title}}</span>
          </div>
          <div class="movie-genres movie-rows">
            <span v-for="genre in movie.genres">{{genre}}&nbsp;&nbsp;</span>
          </div>
          <div class="movie-directors movie-rows">
            导演：<span v-for="director in movie.directors">{{director.name}}&nbsp;&nbsp;</span>
          </div>
          <div class="movie-casts movie-rows">
            主演：<span v-for="cast in movie.casts">{{cast.name}}&nbsp;&nbsp;</span>
          </div>
          <div class="movie-year movie-rows">
            上映年份：<span>{{movie.year}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vImg from '../img/lazyImg.vue'
  export default {
    data () {
      return {
        movies: []
      }
    },
    components: {
      vImg
    },
    mounted () {
      this.loadMovie()
    },
    methods: {
      loadMovie () {
        this.$store.commit('update_loading', true)
        this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then((response) => {
          console.log(response.data)
          this.$store.commit('update_loading', false)
          this.movies = response.data.subjects
        }, (response) => {
          console.log(response.status)
        })
      }
    }
  }
</script>
<style lang="less">
  @import "movies.less";
</style>
