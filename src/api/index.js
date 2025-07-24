import axios from "axios";
import { dominio, normalizarDatos } from '../config/index';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("keyuser")}` 

const api = {

  login(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/auth/login`, body);
  },

  guardarTipoEvento(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/tipoEvento`, body);
  },

  guardarEvento(payload) { 
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/eventos/guardar`, body);
  },

  obtenerTiposEventos() { 
    return axios.get(`${dominio}/api/tiposEventos`);
  },

  eliminarTipoEvento(payload) {
    return axios.delete(`${dominio}/api/eliminarTipoEvento/${payload}`);
  },

  actualizarEvento(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/actualizarEvento/${payload.idEvento}`, body);
  },

  eliminarEvento(payload) {
    return axios.delete(`${dominio}/api/eventos/eliminar/${payload}`);
  },

  obtenerEventos() { 
    return axios.get(`${dominio}/api/eventos`);
  },

  obtenerEventosXTipoEvento(payload) { 
    return axios.get(`${dominio}/api/eventos/${payload}`);
  },

  registrarParticipanteAlEvento(payload) { 
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/registrarParticipanteAlEvento`, body);
  },

  obtenerInscripciones() { 
    return axios.get(`${dominio}/api/inscripciones`);
  },

  guardarInscripcion(payload) { 
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/inscripciones`, body);
  },

  actualizarInscripcion(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/inscripcion/${payload.idInscripcion}`, body);
  },

  eliminarInscripcion(payload) {
    return axios.delete(`${dominio}/api/inscripciones/${payload}`);
  },

  registrarAsistencia(payload) { 
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/registrarAsistencia`, body);
  },

  marcarAsistencia(payload){
    return axios.post(`${dominio}/qr/decode`, payload);
  },

  obtenerInscripcionesPorUsuario(payload){
    return axios.get(`${dominio}/api/inscripciones/usuario/${payload.idUsuario}`);
  },

  //controller de actividad
  traerActividades() {
    return axios.get(`${dominio}/api/actividades`);
  },
  agregarActividad(payload){
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/actividades`, body);
  },
  obtenerActividadPorId(payload){
    return axios.get(`${dominio}/api/actividades/${payload.idActividad}`);
  },
  actualizarActividad(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/actividades/${payload.idActividad}`, body);
  },
  eliminarActividad(payload) {
    return axios.delete(`${dominio}/api/actividades/${payload}`);
  },
  buscarActividadesPorNombre(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/actividades/nombre/${payload}`, body);
  },
  buscarActividadesPorEstado(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/actividades/estado/${payload}`, body);
  },
  buscarActividadesPorCupo(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/actividades/cupo/${payload}`, body);
  },
  buscarActividadesPorTipoEvento(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/actividades/tipo-evento/${payload}`, body);
  },
  buscarActividadesPorEvento(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/actividades/evento/${payload.idEvento}`, body);
  },
  //Controller usuarios
  guardarUsuario(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/usuarios`, body);
  },
  actualizarUsuario(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/usuarios/${payload.idUsuario}`, body);
  },
  eliminarUsuario(payload) {
    return axios.delete(`${dominio}/api/usuarios/${payload}`);
  },
  traerUsuarios() { 
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
    return axios.get(`${dominio}/api/usuarios/email/${payload}`, body);
  },

  //Controller Tipo de Evento
  actualizarTipoEvento(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/tipoEvento/${payload.idTipoEvento}`, body);
  },
  //Controller Tipo de Usuario
  guardarTipoUsuario(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/tipoUsuario`, body);
  },
  actualizarTipoUsuario(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/tipoUsuario/${payload.idTipoUsuario}`, body);
  },
  eliminarTipoUsuario(payload) {
    return axios.delete(`${dominio}/api/tipoUsuario/${payload}`);
  },
  traerTipoUsuario(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/tipoUsuario/${payload}`, body);
  },
  obtenerTiposUsuarios() { 
    return axios.get(`${dominio}/api/tipoUsuarios`);
  },

  //Controller contenido

  guardarContenido(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/contenidos`, body);
  },

  actualizarContenido(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/contenidos/${payload.idContenido}`, body);
  },

  eliminarContenido(payload) {
    return axios.delete(`${dominio}/api/contenidos/${payload}`);
  },

  traerContenido(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/contenidos/${payload}`, body);
  },

  obtenerContenidos() { 
    return axios.get(`${dominio}/api/contenidos`);
  },

  traerContenidoXEvento(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/contenidos/buscarPorEvento`, body);
  },

  traerContenidoXTitulo(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/contenidos/buscarPorTitulo`, body);
  },

  //Controller Imagen

  guardarImagen(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/imagen`, body);
  },

  actualizarImagen(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/imagen/${payload.idImagen}`, body);
  },

  eliminarImagen(payload) {
    return axios.delete(`${dominio}/api/imagen/${payload}`);
  },

  traerImagen(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/imagen/${payload}`, body);
  },

  obtenerImagenes() { 
    return axios.get(`${dominio}/api/imagenes`);
  },

  //Controller Audio

  guardarAudio(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/audio`, body);
  },

  actualizarAudio(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/audio/${payload.idAudio}`, body);
  },

  eliminarAudio(payload) {
    return axios.delete(`${dominio}/api/audio/${payload}`);
  },

  traerAudio(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/audio/${payload}`, body);
  },

  obtenerAudios() { 
    return axios.get(`${dominio}/api/audios`);
  },

  //Controller Video

  guardarVideo(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/video`, body);
  },

  actualizarVideo(payload) { 
    const body = normalizarDatos(payload);
    return axios.put(`${dominio}/api/video/${payload.idVideo}`, body);
  },

  eliminarVideo(payload) {
    return axios.delete(`${dominio}/api/video/${payload}`);
  },

  traerVideo(payload){
    const body = normalizarDatos(payload);
    return axios.get(`${dominio}/api/video/${payload}`, body);
  },

  obtenerVideos() { 
    return axios.get(`${dominio}/api/videos`);
  },

};

export default api;