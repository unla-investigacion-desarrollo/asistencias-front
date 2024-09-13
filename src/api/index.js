import axios from "axios";
import { dominio, normalizarDatos } from '../config/index';

const api = {

  login(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/usuario/login`, body);
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
    return axios.delete(`${dominio}/api/eliminarEvento/${payload}`);
  },

  obtenerEventos() { 
    return axios.get(`${dominio}/api/eventos`);
  },

  registrarParticipanteAlEvento(payload) { 
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/registrarParticipanteAlEvento`, body);
  },

  obtenerInscripciones() { 
    return axios.get(`${dominio}/api/inscripciones`);
  },

  registrarAsistencia(payload) { 
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/registrarAsistencia`, body);
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
    return axios.get(`${dominio}/api/actividades/evento/${payload}`, body);
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

};

export default api;