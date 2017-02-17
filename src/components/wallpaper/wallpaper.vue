<template>
  <div>
    <div v-infinite-scroll="loadMore" infinite-scroll-distance="20" infinite-scroll-disabled="busy">
      <div class="img-block clear-both">
        <figure class="item" v-for="img in imgData">
          <router-link :to="{name: 'detail', params: {gallery_id: img.gallery_id}}">
            <v-img :imageUrl="img.cover_url"></v-img>
          </router-link>
        </figure>
      </div>
      <div class="lazyloading" v-show="busy">
        <img src="../../assets/lazyloading.svg">
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import vImg from '../img/lazyImg.vue'
  export default {
    data () {
      return {
        page: 1,
        imgData: [],
        busy: false
      }
    },
    components: {
      vImg
    },
    mounted () {
      // this.loadMore()
    },
    methods: {
      'loadMore' () {
        this.busy = true
        // 多玩图片
        this.$http.jsonp('http://tu.duowan.com/index.php', {
          params: {
            r: 'api/ajaxgallerys',
            page: this.page,
            pageSize: 10,
            tag: 32 // 福利是 32
          }
        }).then((response) => {
          this.imgData = this.imgData.concat(response.data.gallerys)
          this.busy = false
        }, (response) => {
          console.log(response.state)
          alert('获取失败')
        })
        this.page++
      }
    }
  }
</script>
<style lang="less">
  @import 'wallpaper.less';
  .fade-enter-active {
    transition: all .3s linear;
  }
  .fade-leave-active {
    transition: all .3s linear;
  }
  .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(100%);
  }
</style>
