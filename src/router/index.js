import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ActividadView from '../views/ActividadView.vue'
import ContenidoView from '../views/ContenidoView.vue'
import ErroresView from '../views/ErroresView.vue'
import EscanerView from '../views/EscanerView.vue'
import EventoView from '../views/EventoView.vue'
import InicioView from '../views/InicioView.vue'
import InscripcionView from '../views/InscripcionView.vue'
import ListaTiposEventosView from '../views/ListaTiposEventosView.vue'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import RolView from '../views/RolView.vue'
import TipoEventoView from '../views/TipoEventoView.vue'

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
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/error/:mensaje',
    name: 'ErroresView',
    component: ErroresView
  },
  {
    path: '/nuevoTipoEvento',
    name: 'TipoEventoView',
    component: TipoEventoView
  },
  {
    path: '/listaTipoEvento',
    name: 'ListaTiposEventosView',
    component: ListaTiposEventosView
  },
  {
    path: '/nuevoEvento',
    name: 'EventoView',
    component: EventoView
  },
  {
    path: '/escaner',
    name: 'EscanerView',
    component: EscanerView
  },
  {
    path: '/contenido',
    name: 'ContenidoView',
    component: ContenidoView
  },
  {
    path: '/nuevaActividad',
    name: 'ActividadView',
    component: ActividadView
  },
  {
    path: '/registro',
    name: 'RegistroView',
    component: RegistroView
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
