import api from "../api";
import * as ACTIONS from './actions-types';
import * as MUTATIONS from './mutations-types';

export default {

    [ACTIONS.AGREGAR_EVENTO] (context, payload) {
        context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
    },
    [ACTIONS.INSCRIPCION_EVENTO] (context, payload) {
        context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
    },
    [ACTIONS.AGREGAR_TIPO_USUARIO] (context, payload) {
        api.guardarTipoUsuario(payload)
        .then(response => {
        console.log(response);
          if (response.status == "200") {
            context.commit(MUTATIONS.GUARDAR_TIPO_USUARIO, payload);
          } 
        })
        .catch(error => {
          console.log(error);
        });
    },
    [ACTIONS.AGREGAR_TIPO_EVENTO] (context, payload) {
        api.guardarTipoEvento(payload)
        .then(response => {
        console.log(response);
          if (response.status == "200") {
            context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, response.data);
          } 
          console.log(context.getters.getTipoEventos());
        })
        .catch(error => {
          console.log(error);
        });
    },
    [ACTIONS.AGREGAR_EVENTO] (context, payload) {
      api.guardarEvento(payload)
      .then(response => {
      console.log(response);
        if (response.status == "200") {
          context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
        } 
      })
      .catch(error => {
        console.log(error);
      });
    },
    [ACTIONS.OBTENER_TIPOS_EVENTOS] (context) {
      api.obtenerTiposEventos()
      .then(response => {
      console.log(response);
        if (response.status == "200") {
          context.commit(MUTATIONS.OBTENER_TIPOS_EVENTOS, response.data);
        } 
      })
      .catch(error => {
        console.log(error);
      });
  },
  [ACTIONS.ELIMINAR_TIPO_EVENTO] (context, payload) {
    api.eliminarTipoEvento(payload.idTipoEvento)
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.ELIMINAR_TIPO_DE_EVENTO, payload);
      } 
    })
    .catch(error => {
      console.log(error);
    });
},

  

}