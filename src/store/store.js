/**
 * Created by Administrator on 2017/2/13/0013.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import data from '../common/js/data'

Vue.use(Vuex)

// 状态
const state = {
  'headerTitle': data.header_title['wallpaper'],
  'menuShow': false,
  'menus': data.menus_title,
  'headers': data.header_title,
  'menusIcon': data.menus_icon,
  'isScroll': false,
  'isHeader': true,
  'loadingShow': false
}

// mutations函数
const mutations = {
  update_menuShow (state) {
    state.menuShow = !state.menuShow
  },
  update_menuTitle (state, menu) {
    console.log(data.header_title[menu])
    state.headerTitle = data.header_title[menu]
  },
  update_scroll (state, bl) {
    state.isScroll = bl
  },
  update_header (state, bl) {
    state.isHeader = bl
  },
  update_loading (state, bl) {
    state.loadingShow = bl
  }
}

export default new Vuex.Store({
  state,
  mutations
})
