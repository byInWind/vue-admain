import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/table',
      name: 'table',
        component: () => import( '../views/Table.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( '../views/About.vue')
    }
  ]
})
