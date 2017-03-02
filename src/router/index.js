import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
