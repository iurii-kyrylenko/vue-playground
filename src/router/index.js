import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bootstrap from '@/components/Bootstrap'
import MyForm from '@/components/MyForm'

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
    },
    {
      path: '/my-form',
      name: 'MyForm',
      component: MyForm
    }
  ]
})
