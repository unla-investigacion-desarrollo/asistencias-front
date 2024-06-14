import axios from "axios";
import { normalizarDatos, dominio } from '../config/index'

const api = {

  guardarTipoUsuario(payload) {
    const body = normalizarDatos(payload);
    return axios.post(`${dominio}/tipoUsuario`, body);
  },
};

export default api;