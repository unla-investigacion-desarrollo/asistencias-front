import axios from "axios";
import { dominio, normalizarDatos } from '../config/index';

const obtenerEncabezado = () => {
  let token = window.localStorage.getItem("keyuser");
  return axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const api = {

  login(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/auth/login`, body);
  },

  //Controller Tipo de Evento
  
  guardarTipoEvento(payload) {
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/tipoEvento`, body);
  },

  actualizarTipoEvento(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/tipoEvento/${payload.idTipoEvento}`, body);
  },

  traerTipoEvento(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado()
    return axios.get(`${dominio}/api/tipoEvento/${payload}`, body);
  },

  obtenerTiposEventos() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/tiposEventos`);
  },

  eliminarTipoEvento(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/eliminarTipoEvento/${payload}`);
  },

  // Controller evento

  guardarEvento(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/eventos/guardar`, body);
  },
  actualizarEvento(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/eventos/actualizar/${payload.idEvento}`, body);
  },

  eliminarEvento(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/eventos/eliminar/${payload}`);
  },

  obtenerEventos() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/eventos`);
  },

  obtenerEventosXTipoEvento(payload) { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/eventos/${payload}`);
  },

  //Controller inscripcion

  registrarParticipanteAlEvento(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/registrarParticipanteAlEvento`, body);
  },

  obtenerInscripciones() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/inscripciones`);
  },

  guardarInscripcion(payload) { 
    obtenerEncabezado();
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/inscripciones`, body);
  },

  actualizarInscripcion(payload, id) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/inscripciones/${id}`, body);
  },

  eliminarInscripcion(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/inscripciones/${payload}`);
  },

  marcarAsistenciaActividad(payload) { 
    obtenerEncabezado();
    let qr = encodeURIComponent(payload.qr);
    return axios.post(`${dominio}/qr/decode?qrCode=${qr}&actividadId=${payload.idActividad}`);
  },

  marcarAsistencia(payload){
    obtenerEncabezado();
    let qr = encodeURIComponent(payload);
    return axios.post(`${dominio}/qr/decode?qrCode=${qr}`);
  },

  obtenerInscripcionesPorUsuario(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/api/inscripciones/completa/usuario/${payload.id}`);
  },

  obtenerInscripcion(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/api/inscripciones/completa/${payload}`);
  },

  obtenerInscriptosXEvento(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/api/inscripciones/evento/activa/${payload}`);
  },

  obtenerInscripcionesXEventoyActividad(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/api/inscripciones/evento/${payload.idEvento}/actividad/${payload.idActividad}`);
  },

  //controller de actividad
  traerActividades() {
    obtenerEncabezado();
    return axios.get(`${dominio}/api/actividades`);
  },
  agregarActividad(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/actividades`, body);
  },
  obtenerActividadPorId(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/api/actividades/${payload.idActividad}`);
  },
  actualizarActividad(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/actividades/${payload.idActividad}`, body);
  },
  eliminarActividad(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/actividades/${payload}`);
  },
  buscarActividadesPorNombre(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.get(`${dominio}/api/actividades/nombre/${payload}`, body);
  },
  buscarActividadesPorEstado(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.get(`${dominio}/api/actividades/estado/${payload}`, body);
  },
  buscarActividadesPorCupo(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.get(`${dominio}/api/actividades/cupo/${payload}`, body);
  },
  buscarActividadesPorTipoEvento(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.get(`${dominio}/api/actividades/tipo-evento/${payload}`, body);
  },
  buscarActividadesPorEvento(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/actividades/filtrar`, body);
  },
  buscarActividadesGenericoPublico(payload){
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/public/filtrar`, body);
  },
  
  //Controller usuarios
  guardarUsuario(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/usuarios`, body);
  },
  actualizarUsuario(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/usuarios/${payload.idUsuario}`, body);
  },
  eliminarUsuario(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/usuarios/${payload}`);
  },
  traerUsuarios() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/usuarios`);
  },
  traerUsuario(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/usuarios/${payload}`, body);
  },
  traerUsuarioEmail(payload, hash){
    const body = normalizarDatos(payload);
    if(hash !== ""){
      axios.defaults.headers.common['Authorization'] = `Bearer ${hash}` 
    }
    return axios.get(`${dominio}/api/usuarios/email?email=${payload}`, body);
  },

  //Controller Tipo de Usuario
  guardarTipoUsuario(payload) {
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/tipoUsuario`, body);
  },
  actualizarTipoUsuario(payload) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/tipoUsuario/${payload.idTipoUsuario}`, body);
  },
  eliminarTipoUsuario(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/tipoUsuario/${payload}`);
  },
  traerTipoUsuario(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.get(`${dominio}/api/tipoUsuario/${payload}`, body);
  },
  obtenerTiposUsuarios() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/tipoUsuarios`);
  },

  //Controller contenido

  guardarContenido(payload) {
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/contenidos`, body);
  },

  actualizarContenido(payload, id) { 
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.put(`${dominio}/api/contenidos/${id}`, body);
  },

  eliminarContenido(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/contenidos/${payload}`);
  },

  traerContenido(payload){
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.get(`${dominio}/api/contenidos/${payload}`, body);
  },

  obtenerContenidos() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/contenidos`);
  },

  traerContenidoXEvento(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/api/contenidos/buscarPorEvento?idEvento=${payload}`);
  },

  traerContenidoXTitulo(payload){
    obtenerEncabezado();
    let titulo = encodeURIComponent(payload);
    return axios.get(`${dominio}/api/contenidos/buscarPorTitulo?titulo=${titulo}`);
  },

  //Controller Imagen

  guardarImagen(payload) {
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/imagen`, body);
  },

  actualizarImagen(payload) { 
    const body = normalizarDatos(payload);
    let obj = {
      idContenido: body.contenido.idContenido,
      imagen: body.imagen
    }
    obtenerEncabezado();
    return axios.put(`${dominio}/api/imagen/${payload.idImagen}`, obj);
  },

  eliminarImagen(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/imagen/${payload}`);
  },

  traerImagen(payload){
    obtenerEncabezado();
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/imagen/${payload}`, body);
  },

  obtenerImagenes() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/imagenes`);
  },

  //Controller Audio

  guardarAudio(payload) {
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/audio`, body);
  },

  actualizarAudio(payload) { 
    const body = normalizarDatos(payload);
    let obj = {
      idContenido: body.contenido.idContenido,
      audio: body.audio
    }
    obtenerEncabezado();
    return axios.put(`${dominio}/api/audio/${payload.idAudio}`, obj);
  },

  eliminarAudio(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/audio/${payload}`);
  },

  traerAudio(payload){
    obtenerEncabezado();
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/audio/${payload}`, body);
  },

  obtenerAudios() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/audios`);
  },

  //Controller Video

  guardarVideo(payload) {
    const body = normalizarDatos(payload);
    obtenerEncabezado();
    return axios.post(`${dominio}/api/video`, body);
  },

  actualizarVideo(payload) { 
    const body = normalizarDatos(payload);
    let obj = {
      idContenido: body.contenido.idContenido,
      video: body.video
    }
    obtenerEncabezado();
    return axios.put(`${dominio}/api/video/${payload.idVideo}`, obj);
  },

  eliminarVideo(payload) {
    obtenerEncabezado();
    return axios.delete(`${dominio}/api/video/${payload}`);
  },

  traerVideo(payload){
    obtenerEncabezado();
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/video/${payload}`, body);
  },

  obtenerVideos() { 
    obtenerEncabezado();
    return axios.get(`${dominio}/api/videos`);
  },

  //Controller publico

  traerEventoPublico(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/public/eventos/${payload}`, body);
  },

  obtenerEventosPublicos() { 
    return axios.get(`${dominio}/api/public/eventos`);
  },

  traerParticipante(){
    return axios.get(`${dominio}/api/public/tipoUsuario/participante`);
  },

  traerActividadPublica(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/public/actividad/${payload}`, body);
  },

  obtenerActividadesPublicas() { 
    return axios.get(`${dominio}/api/public/actividades`);
  },

  traerTipoEventoPublico(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/public/tipoEvento${payload}`, body);
  },

  obtenerTiposEventosPublicos() { 
    return axios.get(`${dominio}/api/public/tiposEventos`);
  },

  obtenerProximosEventos(){
    return axios.get(`${dominio}/api/public/eventos/proximos`);
  },

  traerActividadesXEventoPublico(payload){
    return axios.get(`${dominio}/api/public/eventos/${payload}/actividades`);
  },

  olvideMiClave(payload){
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/auth/change-password`, body);
  },

  traerEventosXTipoEventoPublico(payload){
    return axios.get(`${dominio}/api/public/eventos/tipo/${payload}`);
  },

  traerContenidoPublico(payload){
    return axios.get(`${dominio}/api/public/contenidos/${payload}`);
  },

  traerContenidosPublicos(){
    return axios.get(`${dominio}/api/public/contenidos`);
  },

  traerAudioPublico(payload){
    return axios.get(`${dominio}/api/public/audios/${payload}`);
  },

  traerAudiosPublicos(){
    return axios.get(`${dominio}/api/public/audios`);
  },

  traerImagenPublica(payload){
    return axios.get(`${dominio}/api/public/imagenes/${payload}`);
  },

  traerImagenesPublicas(){
    return axios.get(`${dominio}/api/public/imagenes`);
  },

  traerVideoPublico(payload){
    return axios.get(`${dominio}/api/public/videos/${payload}`);
  },

  traerVideosPublicos(){
    return axios.get(`${dominio}/api/public/videos`);
  },

  traerEventoXMesActual(){
    return axios.get(`${dominio}/api/public/eventos/mes-actual`);
  },

  //Estadisticas

  obtenerEstadisticaIndividual(payload){
    obtenerEncabezado();
    return axios.get(`${dominio}/asistencia-actividad/estadisticas/evento/${payload}`);
  },

  obtenerEstadisticas(){
    obtenerEncabezado();
    return axios.get(`${dominio}/asistencia-actividad/obtenerEstadisticas`);
  }


};

export default api;