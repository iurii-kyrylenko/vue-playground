import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bootstrap from '@/components/Bootstrap'
import FormValidation from '@/components/FormValidation'

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
      path: '/form-validation',
      name: 'FormValidation',
      component: FormValidation
    },
    {
      path: '/feature1',
      component: {
        name: 'Feature1',
        template: '<div class="container"><h2>Feature-1</h2></div>'
      }
    },
    {
      path: '/feature2',
      component: {
        name: 'Feature2',
        template: '<div class="container"><h2>Feature-2</h2></div>'
      }
    },
    {
      path: '/cool-page',
      component: {
        name: 'CoolPage',
        template: '<div class="container"><h2>Cool Page</h2></div>'
      }
    }
  ]
})
