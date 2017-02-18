import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      redirect: {name: 'wallpaper'}
    },
    {
      path: '/wallpaper',
      name: 'wallpaper',
      component (resolve) {
        require(['components/wallpaper/wallpaper'], resolve)
      },
      children: [
        {
          path: ':gallery_id',
          name: 'detail',
          component (resolve) {
            return require(['components/detail/detail'], resolve)
          }
        }
      ]
    },
    {
      path: '/movie',
      name: 'movie',
      component (resolve) {
        require(['components/movies/movies'], resolve)
      }
    },
    {
      path: '/github',
      name: 'github',
      component (resolve) {
        require(['components/movies/movies'], resolve)
      }
    },
    {
      path: '/html5',
      name: 'html5',
      component (resolve) {
        require(['components/movies/movies'], resolve)
      }
    }
  ]
})
