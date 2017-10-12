import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signIn'
import Register from '@/pages/register'
import AppShell from '@/pages/appShell'

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
