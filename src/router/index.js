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
import EditarTipoEventoView from '../views/EditarTipoEventoView.vue'
import ListaRolesView from '../views/ListaRolesView.vue'
import EditarRolesView from '../views/EditarRolesView.vue'
import EditarEventoView from '../views/EditarEventoView.vue'
import ListaEventosView from '../views/ListaEventosView.vue'
import ListaUsuarioView from '../views/ListaUsuarioView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import EventosView from '../views/EventosView.vue'
import ListaActividadView from '../views/ListaActividadView.vue'
import EditarActividadView from '../views/EditarActividadView.vue'
import DetalleEventoView from '../views/DetalleEventoView.vue'
import DetalleActividadView from '../views/DetalleActividadView.vue'
import DetalleUsuarioView from '../views/DetalleUsuarioView.vue'
import MensajesView from '../views/MensajesView.vue'
import MiPerfilView from '../views/MiPerfilView.vue'
import DetalleInscripcionView from '../views/DetalleInscripcionView.vue'
import ListaInscripcionUsuarioView from '../views/ListaInscripcionUsuarioView.vue'
import EditarUsuariosView from '../views/EditarUsuariosView.vue'
import ListaEventosGeneralView  from '../views/ListaEventosGeneralView.vue'
import PaginaContenidoView from '../views/PaginaContenidoView.vue'
import ListaContenidosGeneralView from '../views/ListaContenidosGeneralView.vue'
import RegistroGeneralView from '../views/RegistroGeneralView.vue'
import EditarUsuarioLogueadoView from '../views/EditarUsuarioLogueadoView.vue'

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
    path: '/unlaRegistro',
    name: 'RegistroView',
    component: RegistroView
  },
  {
    path: '/editarTipoEvento',
    name: 'EditarTipoEventoView',
    component: EditarTipoEventoView
  },
  {
    path: '/listaRoles',
    name: 'ListaRolesView',
    component: ListaRolesView
  },
  {
    path: '/editarRol',
    name: 'EditarRolesView',
    component: EditarRolesView
  },
  {
    path: '/editarEvento',
    name: 'EditarEventoView',
    component: EditarEventoView
  },
  {
    path: '/listaEventos',
    name: 'ListaEventosView',
    component: ListaEventosView
  },
  {
    path: '/listaUsuarios',
    name: 'ListaUsuarioView',
    component: ListaUsuarioView
  },
  {
    path: '/unlaUsuarios',
    name: 'UsuariosView',
    component: UsuariosView
  },
  {
    path: '/unlaUsuarios/:solapa',
    name: 'UsuariosView',
    component: UsuariosView
  },
  {
    path: '/unlaEventos',
    name: 'EventosView',
    component: EventosView
  },
  {
    path: '/unlaEventos/:solapa',
    name: 'EventosView',
    component: EventosView
  },
  {
    path: '/listaActividades',
    name: 'ListaActividadView',
    component: ListaActividadView
  },
  {
    path: '/editarActividad',
    name: 'EditarActividadView',
    component: EditarActividadView
  },
  {
    path: '/detalleEvento',
    name: 'DetalleEventoView',
    component: DetalleEventoView
  },
  {
    path: '/detalleActividad',
    name: 'DetalleActividadView',
    component: DetalleActividadView
  },
  {
    path: '/perfil',
    name: 'DetalleUsuarioView',
    component: DetalleUsuarioView
  },
  {
    path: '/gracias/:mensaje',
    name: 'MensajesView',
    component: MensajesView
  },
  {
    path: '/miPerfil',
    name: 'MiPerfilView',
    component: MiPerfilView
  },
  {
    path: '/miInscripcion',
    name: 'DetalleInscripcionView',
    component: DetalleInscripcionView
  },
  {
    path: '/misInscripciones',
    name: 'ListaInscripcionUsuarioView',
    component: ListaInscripcionUsuarioView
  },
  {
    path: '/editarUnlaUsuario',
    name: 'EditarUsuariosView',
    component: EditarUsuariosView
  },
  {
    path: '/eventosUnla',
    name: 'ListaEventosGeneralView',
    component: ListaEventosGeneralView
  },
  {
    path: '/contenido/:id',
    name: 'PaginaContenidoView',
    component: PaginaContenidoView
  },
  {
    path: '/contenidos',
    name: 'ListaContenidosGeneralView',
    component: ListaContenidosGeneralView
  },
  {
    path: '/registro',
    name: 'RegistroGeneralView',
    component: RegistroGeneralView
  },
  {
    path: '/editarUsuario',
    name: 'EditarUsuarioLogueadoView',
    component: EditarUsuarioLogueadoView
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
