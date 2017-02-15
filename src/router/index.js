import Vue from 'vue'
import Router from 'vue-router'
import news from 'components/news/news'
import wallpaper from 'components/wallpaper/wallpaper'
import detail from 'components/detail/detail'

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
      component: wallpaper,
      children: [
        {
          path: ':gallery_id',
          name: 'detail',
          component: detail
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/github',
      name: 'github',
      component: news
    },
    {
      path: '/html5',
      name: 'html5',
      component: news
    }
  ]
})
