import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import InicioView from '../views/InicioView.vue'
import InscripcionView from '../views/InscripcionView.vue'
import RolView from '../views/RolView.vue'


const routes = [
  {
    path: '/',
    name: 'InicioView',
    component: InicioView
  },
  {
    path: '/inscripcion',
    name: 'InscripcionView',
    component: InscripcionView
  },
  {
    path: '/nuevoRol',
    name: 'RolView',
    component: RolView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
