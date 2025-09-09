import router from "@/router";
import api from "../api";
import * as ACTIONS from './actions-types';
import * as MUTATIONS from './mutations-types';
import { contenido2, lista, tipoeventos, eventos, roles, usuarios, actividades, participante, audios, imagenes, videos, invitacion, estadisticas, inscriptosEvento, inscriptosEventoActividad } from "@/config/mock"
import { hoyFormateado } from "@/config/index"

export default {

[ACTIONS.INSCRIPCION_EVENTO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
},
[ACTIONS.AGREGAR_TIPO_USUARIO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.guardarTipoUsuario(payload)
  .then(response => {
    console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.AGREGO_ROL, true);
      context.commit(MUTATIONS.GUARDAR_TIPO_USUARIO, payload);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_ROL, false); }, 120000);
      router.push({
      name: "UsuariosView",
      params: {
        solapa: "roles",
      },
    });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_TIPO_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.guardarTipoEvento(payload)
  .then(response => {
    console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.AGREGO_TIPO_EVENTO, true);
      context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, response.data);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_TIPO_EVENTO, false); }, 10000);
      router.push({
      name: "EventosView",
      params: {
        solapa: "tipo",
      },
    });
    } 
    console.log(context.getters.getTipoEventos());
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.guardarEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.AGREGO_EVENTO, true);
      context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_EVENTO, false); }, 10000);
      router.push({
        name: "EventosView",
        params: {
          solapa: "eventos",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_TIPOS_EVENTOS] (context) {
  console.log("recupero datos");
  //context.dispatch(ACTIONS.ACTUALIZO_DATOS);
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.OBTENER_TIPOS_EVENTOS, tipoeventos);
  } else {
    api.obtenerTiposEventos()
    .then(response => {
    console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.OBTENER_TIPOS_EVENTOS, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_TIPO_EVENTO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarTipoEvento(context.getters.getTipoEvento().idTipoEvento)
  .then(response => {
    console.log(response);
    console.log("Elimino este tipo de evento: " + JSON.stringify(context.getters.getTipoEvento()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_TIPO_EVENTO, true);
      context.commit(MUTATIONS.ELIMINAR_TIPO_DE_EVENTO, context.getters.getTipoEvento());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_TIPO_EVENTO, false); }, 10000);
    } 
    })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.actualizarEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.EDITO_EVENTO, true);
      context.commit(MUTATIONS.MODIFICAR_UN_EVENTO, payload);
      setTimeout(() => { context.commit(MUTATIONS.EDITO_EVENTO, false); }, 10000);
      router.push({
        name: "EventosView",
        params: {
          solapa: "eventos",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_EVENTO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarEvento(context.getters.getEvento().idEvento)
  .then(response => {
    console.log(response);
    console.log("Elimino este evento: " + JSON.stringify(context.getters.getEvento()));
    if (response.status == "204") {
      context.commit(MUTATIONS.ELIMINO_EVENTO, true);
      context.commit(MUTATIONS.ELIMINAR_UN_EVENTO, context.getters.getEvento());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_EVENTO, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_TIPO_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.actualizarTipoEvento(payload)
  .then(response => {
    console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.EDITO_TIPO_EVENTO, true);
      context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, response.data);
      setTimeout(() => { context.commit(MUTATIONS.EDITO_TIPO_EVENTO, false); }, 10000);
      router.push({
        name: "EventosView",
        params: {
          solapa: "tipo",
        },
      });
    } 
    console.log(context.getters.getTipoEventos());
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.EDITAR_TIPO_EVENTO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, payload);
  router.push('/editarTipoEvento');
},
[ACTIONS.OBTENER_EVENTOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, eventos);
    context.dispatch(ACTIONS.TRAER_FORMATO_EVENTOS, eventos);
  } else {
    api.obtenerEventos()
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, response.data);
        context.dispatch(ACTIONS.TRAER_FORMATO_EVENTOS, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_EVENTO_X_TIPO_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.obtenerEventosXTipoEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.REGISTRAR_PARTICIPANTE_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.registrarParticipanteAlEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.REGISTRAR_PARTICIPANTE_AL_EVENTO, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_ROLES] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.OBTENER_ROLES, roles);
  } else {
    api.obtenerTiposUsuarios()
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.OBTENER_ROLES, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.EDITAR_ROL] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_ROL, payload);
  router.push('/editarRol');
},
[ACTIONS.ACTUALIZAR_ROL] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.actualizarTipoUsuario(payload)
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_ROL, true);
        context.commit(MUTATIONS.GUARDAR_AGREGAR_ROL, response.data);
        setTimeout(() => { context.commit(MUTATIONS.EDITO_ROL, false); }, 10000);
        router.push({
            name: "UsuariosView",
            params: {
              solapa: "roles",
            },
          });
      } 
      console.log(context.getters.getRoles());
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_ROL] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarTipoUsuario(context.getters.getTipoUsuario().idTipoUsuario)
  .then(response => {
   console.log("Elimino este rol: " + JSON.stringify(context.getters.getTipoUsuario()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_ROL, true);
      context.commit(MUTATIONS.ELIMINAR_TIPO_DE_USUARIO, context.getters.getTipoUsuario());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_ROL, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.TRAER_ACTIVIDADES, actividades);
  } else {
    api.traerActividades()
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES_X_NOMBRE] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.buscarActividadesPorNombre(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES_X_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.buscarActividadesPorEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      //let lista = response.data;
      //let listaAux = [];
      //let aux = {};
      //for(let i = 0; i < lista.length; i++){
      //  aux.nombre = lista[i].nombre;
      //  listaAux.push(aux);
      //}
      //console.log(listaAux);
      context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES_X_ESTADO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.buscarActividadesPorEstado(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES_X_TIPO_EVENTO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.buscarActividadesPorTipoEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES_X_CUPO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.buscarActividadesPorCupo(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ACTIVIDADES_X_ID] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.obtenerActividadPorId(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_USUARIOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.TRAER_USUARIOS, usuarios);
  } else {
    api.traerUsuarios()
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_USUARIOS, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_INFO_USUARIO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.traerUsuario(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.TRAER_INFO_USUARIO, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_INFO_USUARIO_EMAIL] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.traerUsuarioEmail(payload, context.getters.getHash())
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
      router.push("/");
    } else {
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES, response);
    } 
  })
  .catch(error => {
    console.log("Este es el error" + error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.agregarActividad(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.AGREGO_ACTIVIDAD, true);
      context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_ACTIVIDAD, false); }, 10000);
      router.push({
        name: "EventosView",
        params: {
          solapa: "actividades",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.actualizarActividad(payload)
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_ACTIVIDAD, true);
        context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, response.data);
        setTimeout(() => { context.commit(MUTATIONS.EDITO_ACTIVIDAD, false); }, 10000);
        router.push({
          name: "EventosView",
          params: {
            solapa: "actividades",
          },
        });
      } 
      console.log(context.getters.getActividades());
    })
    .catch(error => {
      console.log(error);
    });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.EDITAR_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
  router.push('/editarActividad');
},
[ACTIONS.ELIMINAR_ACTIVIDAD] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarActividad(context.getters.getActividad().idActividad)
  .then(response => {
  console.log("Elimino esta actividad: " + JSON.stringify(context.getters.getActividad()));
    if (response.status == "204") {
      context.commit(MUTATIONS.ELIMINO_ACTIVIDAD, true);
      context.commit(MUTATIONS.ELIMINAR_UNA_ACTIVIDAD, context.getters.getActividad());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_ACTIVIDAD, false); }, 120000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.EDITAR_EVENTO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
  router.push('/editarEvento');
},
[ACTIONS.EDITAR_AUDIO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AUDIO, payload);
  router.push('/editarAudio');
},
[ACTIONS.EDITAR_IMAGEN] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_IMAGEN, payload);
  router.push('/editarImagen');
},
[ACTIONS.EDITAR_VIDEO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_VIDEO, payload);
  router.push('/editarVideo');
},
[ACTIONS.DETALLE_EVENTO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
  router.push('/detalleEvento');
},
[ACTIONS.DETALLE_EVENTO_GENERAL] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
  router.push('/infoEvento');
},
[ACTIONS.DETALLE_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
  router.push('/detalleActividad');
},
[ACTIONS.DETALLE_ACTIVIDAD_GENERAL] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
  router.push('/infoActividad');
},
[ACTIONS.DETALLE_INSCRIPCION] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
  router.push('/miInscripcion');
},
[ACTIONS.OBTENER_EVENTOS_X_CATEGORIA] (context, payload) {
  context.commit(MUTATIONS.GUARDO_FILTRO_CATEGORIA_EVENTO, payload);
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.obtenerEventos()
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      let lista = response.data;
      let listaAux = [];
      let aux = {};

      for(let i = 0; i < lista.length; i++){
        if(lista[i].tipoEvento.nombre == payload){
          aux = lista[i];
          listaAux.push(aux);
        }
      }
      console.log(listaAux);
      context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, listaAux);
      context.dispatch(ACTIONS.TRAER_FORMATO_EVENTOS, listaAux);
      router.push('/eventosUnla');
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false); 
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.REGISTRAR_USUARIO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true); 
  api.guardarUsuario(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.AGREGO_USUARIO, true);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_USUARIO, false); }, 1000);
      context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
      router.push('/miPerfil');
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false); 
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.FORMULARIO_INSCRIPCION_EVENTO] (context, payload) {
  context.commit(MUTATIONS.INSCRIPCION_DEFAULT);
  context.commit(MUTATIONS.GUARDAR_EVENTO_INSCRIPCION, payload);
  router.push('/inscripcion');
},
[ACTIONS.LOGIN] (context, payload) {
  api.login(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_LOGIN, response.data);
      context.dispatch(ACTIONS.OBTENER_INFO_USUARIO_EMAIL, payload.email);
    } else{
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES, response);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
},
[ACTIONS.MARCAR_ASISTENCIA] (context, payload) {
  api.marcarAsistencia(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      router.push('/');
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_INSCRIPCION_X_USUARIO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    let lista = context.getters.getInscripciones();
    lista.push(invitacion);
    context.commit(MUTATIONS.TRAER_INSCRIPCION_X_USUARIO, lista);
  } else {
    context.commit(MUTATIONS.RECUPERAR_USUARIO);
    let payload = context.getters.getUsuario();
    api.obtenerInscripcionesPorUsuario(payload)
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_INSCRIPCION_X_USUARIO, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_CONTENIDO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  console.log(payload);
  let lista = context.getters.getEventos();
  let evento = {};
  for(let i = 0; i < lista.length; i++){
    if(payload.evento == lista[i].nombre){
      evento = lista[i];
    }
  }
  console.log("Evento elegido " + JSON.stringify(evento));
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.GUARDAR_CONTENIDO, payload);
  } else {
    api.guardarContenido(payload)
    .then(response => {
      console.log(response);
      if (response.status == "201") {
        context.commit(MUTATIONS.AGREGO_CONTENIDO, true);
        context.commit(MUTATIONS.GUARDAR_CONTENIDO, payload);
        setTimeout(() => { context.commit(MUTATIONS.AGREGO_CONTENIDO, false); }, 10000);
        router.push({
          name: "ContenidoAudioVisualView",
          params: {
            solapa: "contenidos",
          },
        });
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACEPTA_ELIMINAR_EVENTO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_TIPO_EVENTO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_INSCRIPCION] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_TIPO_USUARIO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_TIPO_USUARIO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_USUARIO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_AGREGAR_USUARIO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_ACTIVIDAD] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_CONTENIDO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_CONTENIDO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_AUDIO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_AUDIO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_IMAGEN] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_IMAGEN, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_VIDEO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_VIDEO, payload);
},
[ACTIONS.ELIMINAR_CONTENIDO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarContenido(context.getters.getContenido().idContenido)
  .then(response => {
   console.log("Elimino este contenido: " + JSON.stringify(context.getters.getContenido()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_CONTENIDO, true);
      context.commit(MUTATIONS.ELIMINAR_CONTENIDO, context.getters.getContenido());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_CONTENIDO, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_USUARIO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarUsuario(context.getters.getUsuario().idUsuario)
  .then(response => {
   console.log("Elimino este usuario: " + JSON.stringify(context.getters.getUsuario()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_USUARIO, true);
      context.commit(MUTATIONS.ELIMINAR_USUARIO, context.getters.getUsuario());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_USUARIO, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_USUARIO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.actualizarUsuario(payload)
  .then(response => {
    if (response.status == "200") {
      context.commit(MUTATIONS.EDITO_USUARIO, true);
      context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
      setTimeout(() => { context.commit(MUTATIONS.EDITO_USUARIO, false); }, 10000);
      router.push({
          name: "UsuariosView",
          params: {
            solapa: "usuarios",
          },
        });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.EDITAR_USUARIO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_USUARIO, payload);
  router.push('/editarUnlaUsuario');
},
[ACTIONS.IDENTIFICO_ERRORES] (context) {
  let error = JSON.stringify(context.getters.getError());
  let status = error.status;
  let codigoError = JSON.stringify(error);
  if(status === "500" || codigoError.includes("500")){
    router.push({
      name: "ErroresView",
      params: {
        mensaje: "error-servidor",
      },
    });
  } else if (status === "404"  || codigoError.includes("404")){
    router.push("/404");
  } else if (status === "401" || codigoError.includes("401")){
    context.commit(MUTATIONS.CERRAR_SESION);
    router.push({
      name: "ErroresView",
      params: {
        mensaje: "error-invalido",
      },
    });
  } else if (codigoError.includes("El usuario ya existe")){
    router.push({
      name: "ErroresView",
      params: {
        mensaje: "usuario-duplicado",
      },
    });
  } else {
    router.push({
      name: "ErroresView",
      params: {
        mensaje: "mensaje-2",
      },
    });
  }
},
[ACTIONS.LOGOUT] (context) {
  context.commit(MUTATIONS.CERRAR_SESION);
  router.push('/');
},
[ACTIONS.TRAER_CONTENIDO] (context, payload) {
  context.commit(MUTATIONS.OBTENER_CONTENIDO, contenido2);
  router.push({
      name: "PaginaContenidoView",
      params: {
        id: payload,
      },
    });
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZO_DATOS] (context) {
  context.commit(MUTATIONS.ACTUALIZO_DATOS);
},
[ACTIONS.ELIMINAR_INSCRIPCION] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarInscripcion(context.getters.getInscripcion().idInscripcion)
  .then(response => {
   console.log("Elimino inscripcion: " + JSON.stringify(context.getters.getInscripcion()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_INSCRIPCION, true);
      context.commit(MUTATIONS.ELIMINAR_UNA_INSCRIPCION, context.getters.getInscripcion());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_INSCRIPCION, false); }, 10000);
      router.push({
        name: "MensajesView",
        params: {
          mensaje: "elimino_inscripcion",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.TRAER_CONTENIDOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.OBTENER_CONTENIDOS, lista);
    context.dispatch(ACTIONS.TRAER_FORMATO_CONTENIDOS, lista);
  } else {
    api.obtenerContenidos()
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.OBTENER_CONTENIDOS, response.data);
        context.dispatch(ACTIONS.TRAER_FORMATO_CONTENIDOS, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
 context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
 context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.DETALLE_CONTENIDO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  context.commit(MUTATIONS.OBTENER_CONTENIDO, payload);
  router.push({
      name: "PaginaContenidoView",
      params: {
        id: payload.idContenido,
      },
    });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.TRAER_FORMATO_EVENTOS] (context, payload) {
  const eventos = payload.map(e => e.nombre);
  context.commit(MUTATIONS.EVENTOS_FORMATEADOS, [...new Set(eventos)]);
},
[ACTIONS.TRAER_FORMATO_CONTENIDOS] (context, payload) {
  const contenidos = payload.map(e => e.titulo);
  context.commit(MUTATIONS.CONTENIDOS_FORMATEADOS, [...new Set(contenidos)]);
},
[ACTIONS.EDITAR_USUARIO_LOGUEADO] () {
  router.push("/editarUsuario");
},

[ACTIONS.ACTUALIZAR_USUARIO_LOGUEADO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.actualizarUsuario(payload)
    .then(response => {
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_USUARIO, true);
        context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
        router.push("/miPerfil");
        setTimeout(() => { context.commit(MUTATIONS.EDITO_USUARIO, false); }, 10000);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
    context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
    context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_PROXIMOS_EVENTOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.obtenerEventos()
  .then(response => {
  console.log(response);
    if (response.status == "200") {

      let lista = response.data;
      let listaAux = [];
      let aux = {};

      for(let i = 0; i < lista.length; i++){
        if(lista[i].fechaInicio > hoyFormateado){
          aux = lista[i];
          listaAux.push(aux);
        }   
      }
      console.log(listaAux);
      context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, listaAux);
      context.dispatch(ACTIONS.TRAER_FORMATO_EVENTOS, listaAux);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.EDITAR_CONTENIDO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_CONTENIDO, payload);
  router.push('/editarContenido');
},
[ACTIONS.EDITAR_INSCRIPCION] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
  router.push('/actualizoInscripcion');
},
[ACTIONS.AGREGAR_AUDIO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.guardarAudio(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.AGREGO_AUDIO, true);
      context.commit(MUTATIONS.GUARDAR_AUDIO, payload);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_AUDIO, false); }, 10000);
      router.push({
        name: "ContenidoAudioVisualView",
        params: {
          solapa: "audios",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_IMAGEN] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.guardarImagen(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.AGREGO_IMAGEN, true);
      context.commit(MUTATIONS.GUARDAR_IMAGEN, payload);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_IMAGEN, false); }, 10000);
      router.push({
        name: "ContenidoAudioVisualView",
        params: {
          solapa: "imagenes",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_VIDEO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.guardarVideo(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.AGREGO_VIDEO, true);
      context.commit(MUTATIONS.GUARDAR_VIDEO, payload);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_VIDEO, false); }, 10000);
      router.push({
        name: "ContenidoAudioVisualView",
        params: {
          solapa: "videos",
        },
      });
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.AGREGAR_INSCRIPCION] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.AGREGO_INSCRIPCION, true);
    context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
    router.push({
      name: "MensajesView",
      params: {
        mensaje: "registro-evento",
      },
    });
    setTimeout(() => { context.commit(MUTATIONS.AGREGO_INSCRIPCION, false); }, 10000);
  } else {
    api.guardarInscripcion(payload)
    .then(response => {
    console.log(response);
      if (response.status == "201") {
        context.commit(MUTATIONS.AGREGO_INSCRIPCION, true);
        context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
        setTimeout(() => { context.commit(MUTATIONS.AGREGO_INSCRIPCION, false); }, 10000);
        router.push({
          name: "MensajesView",
          params: {
            mensaje: "registro-evento",
          },
        });
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }  
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_CONTENIDO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.EDITO_CONTENIDO, true);
    context.commit(MUTATIONS.GUARDAR_CONTENIDO, payload);
    router.push({
      name: "ContenidoAudioVisualView",
      params: {
        solapa: "contenidos",
      },
    });
    setTimeout(() => { context.commit(MUTATIONS.EDITO_CONTENIDO, false); }, 10000);
  } else {
    api.actualizarContenido(payload)
    .then(response => {
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_CONTENIDO, true);
        context.commit(MUTATIONS.GUARDAR_CONTENIDO, response.data);
        router.push({
          name: "ContenidoAudioVisualView",
          params: {
            solapa: "contenidos",
          },
        });
        setTimeout(() => { context.commit(MUTATIONS.EDITO_CONTENIDO, false); }, 10000);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_AUDIO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.EDITO_AUDIO, true);
    context.commit(MUTATIONS.GUARDAR_AUDIO, payload);
    router.push({
      name: "ContenidoAudioVisualView",
      params: {
        solapa: "audios",
      },
    });
    setTimeout(() => { context.commit(MUTATIONS.EDITO_AUDIO, false); }, 10000);
  } else {
    api.actualizarAudio(payload)
    .then(response => {
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_AUDIO, true);
        context.commit(MUTATIONS.GUARDAR_AUDIO, response.data);
        router.push({
          name: "ContenidoAudioVisualView",
          params: {
            solapa: "audios",
          },
        });
        setTimeout(() => { context.commit(MUTATIONS.EDITO_AUDIO, false); }, 10000);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_IMAGEN] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.EDITO_IMAGEN, true);
    context.commit(MUTATIONS.GUARDAR_IMAGEN, payload);
    router.push({
      name: "ContenidoAudioVisualView",
      params: {
        solapa: "imagenes",
      },
    });
    setTimeout(() => { context.commit(MUTATIONS.EDITO_IMAGEN, false); }, 10000);
  } else {
    api.actualizarImagen(payload)
    .then(response => {
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_IMAGEN, true);
        context.commit(MUTATIONS.GUARDAR_IMAGEN, response.data);
        router.push({
          name: "ContenidoAudioVisualView",
          params: {
            solapa: "imagenes",
          },
        });
        setTimeout(() => { context.commit(MUTATIONS.EDITO_IMAGEN, false); }, 10000);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_VIDEO] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.EDITO_VIDEO, true);
    context.commit(MUTATIONS.GUARDAR_VIDEO, payload);
    router.push({
      name: "ContenidoAudioVisualView",
      params: {
        solapa: "videos",
      },
    });
    setTimeout(() => { context.commit(MUTATIONS.EDITO_VIDEO, false); }, 10000);
  } else {
    api.actualizarVideo(payload)
    .then(response => {
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_VIDEO, true);
        context.commit(MUTATIONS.GUARDAR_VIDEO, response.data);
        router.push({
          name: "ContenidoAudioVisualView",
          params: {
            solapa: "videos",
          },
        });
        setTimeout(() => { context.commit(MUTATIONS.EDITO_VIDEO, false); }, 10000);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ACTUALIZAR_INSCRIPCION] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.EDITO_INSCRIPCION, true);
    context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
    setTimeout(() => { context.commit(MUTATIONS.EDITO_INSCRIPCION, false); }, 10000);
    router.push({
      name: "MensajesView",
      params: {
        mensaje: "actualizo-registro-evento",
      },
    });
  } else {
    api.actualizarInscripcion(payload)
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_INSCRIPCION, true);
        context.commit(MUTATIONS.GUARDAR_INSCRIPCION_EVENTO, payload);
        setTimeout(() => { context.commit(MUTATIONS.EDITO_INSCRIPCION, false); }, 10000);
        router.push({
          name: "MensajesView",
          params: {
            mensaje: "actualizo-registro-evento",
          },
        });
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }  
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_AUDIO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarAudio(context.getters.getAudio().idAudio)
  .then(response => {
   console.log("Elimino Audio: " + JSON.stringify(context.getters.getAudio()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_AUDIO, true);
      context.commit(MUTATIONS.ELIMINAR_AUDIO, context.getters.getAudio());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_AUDIO, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_IMAGEN] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarImagen(context.getters.getImagen().idImagen)
  .then(response => {
   console.log("Elimino Imagen: " + JSON.stringify(context.getters.getImagen()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_IMAGEN, true);
      context.commit(MUTATIONS.ELIMINAR_IMAGEN, context.getters.getImagen());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_IMAGEN, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.ELIMINAR_VIDEO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.eliminarVideo(context.getters.getVideo().idVideo)
  .then(response => {
   console.log("Elimino Video: " + JSON.stringify(context.getters.getVideo()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_VIDEO, true);
      context.commit(MUTATIONS.ELIMINAR_VIDEO, context.getters.getVideo());
      setTimeout(() => { context.commit(MUTATIONS.ELIMINO_VIDEO, false); }, 10000);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_TIPOS_EVENTOS_PUBLICOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.OBTENER_TIPOS_EVENTOS, tipoeventos);
  } else {
    api.obtenerTiposEventosPublicos()
    .then(response => {
    console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.OBTENER_TIPOS_EVENTOS, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  }
  },
  [ACTIONS.OBTENER_EVENTOS_PUBLICOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, eventos);
    context.dispatch(ACTIONS.TRAER_FORMATO_EVENTOS, eventos);
  } else {
    api.obtenerEventosPublicos()
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.OBTENER_LISTA_EVENTOS, response.data);
        context.dispatch(ACTIONS.TRAER_FORMATO_EVENTOS, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_ACTIVIDADES_PUBLICAS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.TRAER_ACTIVIDADES, actividades);
  } else {
    api.obtenerActividadesPublicas()
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_ACTIVIDADES, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_ACTIVIDADES_PUBLICAS_ID] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.traerActividadPublica(payload.idActividad)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_EVENTOS_PUBLICOS_ID] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.traerEventoPublico(payload.idEvento)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_TIPOS_EVENTOS_PUBLICOS_ID] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.traerTipoEventoPublico(payload.idTipoEvento)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_PARTICIPANTE] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.GUARDAR_TIPO_USUARIO, participante);
  } else {
    api.traerParticipante()
    .then(response => {
    console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.GUARDAR_TIPO_USUARIO, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.OBTENER_AUDIOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.TRAER_AUDIOS, audios);
  } else {
    api.obtenerAudios()
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_AUDIOS, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_IMAGENES] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.TRAER_IMAGENES, imagenes);
  } else {
    api.obtenerImagenes()
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_IMAGENES, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_VIDEOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  if(context.getters.getDemo()){
    context.commit(MUTATIONS.TRAER_VIDEOS, videos);
  } else {
    api.obtenerVideos()
    .then(response => {
      console.log(response);
      if (response.status == "200") {
        context.commit(MUTATIONS.TRAER_VIDEOS, response.data);
      } 
    })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
  }
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.GENERAR_QR] (context, payload) {
  router.push({
    name: "ContenidoQRView",
    params: {
      id: payload.idContenido,
    },
  });
  context.commit(MUTATIONS.ACTUALIZO_PAGINA);
},
[ACTIONS.OBTENER_ESTADISTICAS] (context) {
  context.commit(MUTATIONS.TRAER_ESTADISTICAS, estadisticas);
},
[ACTIONS.EVENTO_NUEVO] (context) {
  context.commit(MUTATIONS.EVENTO_DEFAULT);
  router.push('/nuevoEvento');
},
[ACTIONS.USUARIO_NUEVO] (context) {
  context.commit(MUTATIONS.USUARIO_DEFAULT);
  router.push('/unlaRegistro');
},
[ACTIONS.ACTIVIDAD_NUEVA] (context) {
  context.commit(MUTATIONS.ACTIVIDAD_DEFAULT);
  router.push('/nuevaActividad');
},
[ACTIONS.INSCRIPCION_EDITADA] (context) {
  context.commit(MUTATIONS.INSCRIPCION_EDITADA);
},
[ACTIONS.CONTENIDO_NUEVO] (context) {
  context.commit(MUTATIONS.GUARDAR_CONTENIDO, {});
  router.push('/contenido');
},
[ACTIONS.AUDIO_NUEVO] (context) {
  context.commit(MUTATIONS.GUARDAR_AUDIO, {});
  router.push('/nuevoAudio');
},
[ACTIONS.VIDEO_NUEVO] (context) {
  context.commit(MUTATIONS.GUARDAR_VIDEO, {});
  router.push('/nuevoVideo');
},
[ACTIONS.IMAGEN_NUEVA] (context) {
  context.commit(MUTATIONS.GUARDAR_IMAGEN, {});
  router.push('/nuevaImagen');
},
[ACTIONS.ROL_NUEVO] (context) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_ROL, {});
  router.push('/nuevoRol');
},
[ACTIONS.TIPO_EVENTO_NUEVO] (context) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, {});
  router.push('/nuevoTipoEvento');
},
[ACTIONS.USUARIO_GENERAL_NUEVO] (context) {
  context.commit(MUTATIONS.USUARIO_DEFAULT);
  router.push('/registro');
},
[ACTIONS.DETALLE_INSCRIPTOS_X_EVENTO] (context) {
  context.commit(MUTATIONS.INSCRIPTOS_X_EVENTO, inscriptosEvento);
  router.push('/listaInscriptosXEvento');
},
[ACTIONS.DETALLE_INSCRIPTOS_X_EVENTO_ACTIVIDAD] (context) {
  context.commit(MUTATIONS.INSCRIPTOS_X_EVENTO_ACTIVIDAD, inscriptosEventoActividad);
},
}

