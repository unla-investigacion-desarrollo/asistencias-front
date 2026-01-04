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
import ListaProximosEventosView from '../views/ListaProximosEventosView.vue'
import DetalleEventoGeneralView from '../views/DetalleEventoGeneralView.vue'
import Pagina404View from '../views/Pagina404View.vue'
import ListaActividadGeneralView from '../views/ListaActividadGeneralView.vue'
import DetalleActividadGeneralView from '../views/DetalleActividadGeneralView.vue'
import ListaContenidosView from '../views/ListaContenidosView.vue'
import ListaImagenesView from '../views/ListaImagenesView.vue'
import ListaAudiosView from '../views/ListaAudiosView.vue'
import ListaVideosView from '../views/ListaVideosView.vue'
import ContenidoAudioVisualView from '../views/ContenidoAudioVisualView.vue'
import EditarContenidoView from '../views/EditarContenidoView.vue'
import EditarInscripcionView from '../views/EditarInscripcionView.vue'
import EditarAudioView from '../views/EditarAudioView.vue'
import EditarImagenView from '../views/EditarImagenView.vue'
import EditarVideoView from '../views/EditarVideoView.vue'
import RegistrarAsistenciaActividadView from '../views/RegistrarAsistenciaActividadView.vue'
import ImagenView from '../views/ImagenView.vue'
import AudioView from '../views/AudioView.vue'
import VideoView from '../views/VideoView.vue'
import ContenidoQRView from '../views/ContenidoQRView.vue'
import RegistrarAsistenciaView from '../views/RegistrarAsistenciaView.vue'
import CamaraView from '../views/CamaraView.vue'
import EstadisticasView from '../views/EstadisticasView.vue'
import EstadisticasGeneralesView from '../views/EstadisticasGeneralesView.vue'
import RankingEventosView from '../views/RankingEventosView.vue'
import EstadisticasXEventoView from '../views/EstadisticasXEventoView.vue'
import ListaInscriptosView from '../views/ListaInscriptosView.vue'
import ListaInscriptosEventoView from '../views/ListaInscriptosEventoView.vue'
import ListaInscriptosEventoActividadView from '../views/ListaInscriptosEventoActividadView.vue'
import Pagina204View from '../views/Pagina204View.vue'
import Pagina409View from '../views/Pagina409View.vue'

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
    path: '/proximosEventos',
    name: 'ListaProximosEventosView',
    component: ListaProximosEventosView
  },
  {
    path: '/infoEvento',
    name: 'DetalleEventoGeneralView',
    component: DetalleEventoGeneralView
  },
   {
    path: '/404',
    name: 'Pagina404View',
    component: Pagina404View
  },
  {
    path: '/actividadesUnla',
    name: 'ListaActividadGeneralView',
    component: ListaActividadGeneralView
  },
  {
    path: '/infoActividad',
    name: 'DetalleActividadGeneralView',
    component: DetalleActividadGeneralView
  },
  {
    path: '/unlaContenidos',
    name: 'ListaContenidosView',
    component: ListaContenidosView
  },
  {
    path: '/unlaImagenes',
    name: 'ListaImagenesView',
    component: ListaImagenesView
  },
  {
    path: '/unlaAudios',
    name: 'ListaAudiosView',
    component: ListaAudiosView
  },
  {
    path: '/unlaVideos',
    name: 'ListaVideosView',
    component: ListaVideosView
  },
  {
    path: '/unlaContenidoAudiovisual/:solapa',
    name: 'ContenidoAudioVisualView',
    component: ContenidoAudioVisualView
  },
  {
    path: '/editarContenido',
    name: 'EditarContenidoView',
    component: EditarContenidoView
  },
  {
    path: '/actualizoInscripcion',
    name: 'EditarInscripcionView',
    component: EditarInscripcionView
  },
  {
    path: '/editarAudio',
    name: 'EditarAudioView',
    component: EditarAudioView
  },
  {
    path: '/editarImagen',
    name: 'EditarImagenView',
    component: EditarImagenView
  },
  {
    path: '/editarVideo',
    name: 'EditarVideoView',
    component: EditarVideoView
  },
  {
    path: '/asistencia',
    name: 'RegistrarAsistenciaView',
    component: RegistrarAsistenciaView
  },
  {
    path: '/asistenciaActividad',
    name: 'RegistrarAsistenciaActividadView',
    component: RegistrarAsistenciaActividadView
  },
  {
    path: '/nuevaImagen',
    name: 'ImagenView',
    component: ImagenView
  },
  {
    path: '/nuevoAudio',
    name: 'AudioView',
    component: AudioView
  },
  {
    path: '/nuevoVideo',
    name: 'VideoView',
    component: VideoView
  },
  {
    path: '/generarQRContenido/:id',
    name: 'ContenidoQRView',
    component: ContenidoQRView
  },
  {
    path: '/camara/:solapa',
    name: 'CamaraView',
    component: CamaraView
  },
  {
    path: '/estadisticas',
    name: 'EstadisticasView',
    component: EstadisticasView
  },
  {
    path: '/estadisticasGenerales',
    name: 'EstadisticasGeneralesView',
    component: EstadisticasGeneralesView
  },
  {
    path: '/ranking',
    name: 'RankingEventosView',
    component: RankingEventosView
  },
  {
    path: '/estadisticasEvento',
    name: 'EstadisticasXEventoView',
    component: EstadisticasXEventoView
  },
  {
    path: '/listaInscriptosEventos',
    name: 'ListaInscriptosView',
    component: ListaInscriptosView
  },
  {
    path: '/listaInscriptosXEvento',
    name: 'ListaInscriptosEventoView',
    component: ListaInscriptosEventoView
  },
  {
    path: '/listaInscriptosXEventoActividad',
    name: 'ListaInscriptosEventoActividadView',
    component: ListaInscriptosEventoActividadView
  },
  {
    path: '/204',
    name: 'Pagina204View',
    component: Pagina204View
  },
  {
    path: '/409',
    name: 'Pagina409View',
    component: Pagina409View
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
