<template>
  <div id="app">
    <v-header id="header" v-show="isHeader"></v-header>
    <router-view id="body" :class="{'overflow-h': isScroll}"></router-view>
    <v-loading :show="loadingShow"></v-loading>
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
      'isScroll', 'loadingShow', 'isHeader'
    ])
  },
  components: {
    vHeader, vLoading
  }
}
</script>

<style lang="less">
  @import "common/css/common.less";
</style>
