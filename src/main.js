// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
  .config('https://bdeda63cfb5546e5b43be9a120d5558f@sentry.io/230635')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
