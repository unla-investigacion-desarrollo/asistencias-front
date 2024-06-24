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
};

export default api;