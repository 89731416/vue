import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
    Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: "history",
    routes: [
      {
        path: '/demo',
        name: 'Dome',
        component: resolve => require(['@/pages/link/demo'], resolve),
        meta: {
            title: 'demo',
            keepAlive: true
        }
      },
      {
        path: '/demo2',
        name: 'Dome2',
        component: resolve => require(['@/pages/link/demo2'], resolve),
        meta: {
            title: 'demo2',
            keepAlive: true
        }
      }
    ]
})