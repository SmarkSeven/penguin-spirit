import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/SignIn.vue'
import Register from '@/pages/Register.vue'
import AppShell from '../pages/AppShell.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/reg',
      name: 'reg',
      component: Register
    },
    {
      path: '/',
      name: 'appShell',
      component: AppShell
    }
  ]
})
