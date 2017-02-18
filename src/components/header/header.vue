<template>
  <div>
    <div class="mask" v-show="menuShow" @click="isShow"></div>
    <header class="header" :class="{'show': menuShow}">
      <div class="bar">
        <div class="pull-left" @click="isShow">
          <i class="fa fa-list-ul fa-lg"></i>
        </div>
        <div class="title">{{ headerTitle }}</div>
        <div class="pull-right">
          <i class="fa fa-search fa-lg"></i>
        </div>
      </div>
    </header>
    <v-menu :show="menuShow"></v-menu>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import vMenu from '../menu/menu.vue'
  export default {
    components: {
      vMenu
    },
    computed: {
      ...mapState([
        'menuShow', 'headerTitle'
      ])
    },
    methods: {
      isShow () {
        this.$store.commit('update_menuShow')
      }
    }
  }
</script>
<style lang="less">
  @import 'header.less';
</style>
