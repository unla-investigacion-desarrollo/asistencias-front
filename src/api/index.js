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
};

export default api;