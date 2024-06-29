import axios from "axios";
import { dominio, normalizarDatos } from '../config/index';

const api = {

  guardarTipoUsuario(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/api/tipoUsuario`, body);
  },

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
    return axios.post(`${dominio}/api/guardarEvento`, body);
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

};

export default api;