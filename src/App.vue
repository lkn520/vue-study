<template>
  <div id="app">
    <v-header></v-header>
    <v-loading :show="loadingShow"></v-loading>
    <div class="body" :class="{'overflow-h': isScroll}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHeader from './components/header/header.vue'
import vLoading from './components/loading/loading.vue'
import {mapState} from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'isScroll', 'loadingShow'
    ])
  },
  components: {
    vHeader, vLoading
  }
}
</script>

<style>
  #app {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

  }
  #app .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 6;
  }
  #app .body {
    position: fixed;
    padding-top: 50px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
    overflow-scrolling : touch;
    overflow: auto;
  }
  .overflow-h {
    overflow: hidden !important;
  }
</style>
