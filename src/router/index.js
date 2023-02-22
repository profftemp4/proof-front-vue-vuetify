import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import bandejaPrincipal from '../views/bandejaPrincipal.vue'
import bandejaAdmin from '../views/bandejaAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bandejaPrincipalC',
    component: bandejaPrincipal
  }, {
    path: '/bandejaAdmin',
    name: 'bandejaAdminC',
    component: bandejaAdmin,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(store.getters.getAutenticacion)
    if (store.getters.getAutenticacion) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
