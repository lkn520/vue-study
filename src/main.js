// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(VueLazyload, {
  error: require('./assets/404.jpg'),
  loading: require('./assets/loading.svg'),
  attempt: 1
})

Vue.use(VueResource)
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
