<template>
  <div class="menu">
    <div class="menu-body" :class="{'show': show}">
      <div class="menu-user">
        <div class="menu-avatar">
          <v-img :imageUrl="avatar"></v-img>
        </div>
        <div class="menu-name">茨木童子</div>
      </div>
      <div class="menu-list">
        <ul>
          <li v-for="menu in menus" @click="updateTitle(menu)">
            <router-link class="link" :to="{name: menu}">
              <div class="menu-icon">
                <i class="fa" :class="'fa-'+menusIcon[menu]"></i>
              </div>
              <span class="menu-text">{{headers[menu]}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import vImg from '../img/img.vue'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        avatar: require('../../assets/avatar.jpeg')
      }
    },
    props: {
      show: {
        type: Boolean
      }
    },
    components: {
      vImg
    },
    computed: {
      ...mapState([
        'menus', 'headerTitle', 'headers', 'menusIcon'
      ])
    },
    methods: {
      updateTitle (title) {
        this.$store.commit('update_menuTitle', title)
        this.$store.commit('update_menuShow')
      }
    }
  }
</script>
<style lang="less">
  @import 'menu.less';
</style>
