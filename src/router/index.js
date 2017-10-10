import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signIn'
import Register from '@/pages/register'
import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/reg',
      name: 'reg',
      component: Register
    },
    {
      path: '/app',
      name: 'home',
      component: Home
    }
  ]
})
