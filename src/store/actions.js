import router from "@/router";
import api from "../api";
import * as ACTIONS from './actions-types';
import * as MUTATIONS from './mutations-types';
import { contenido2, lista } from "@/config/mock"
import { hoyFormateado } from "@/config/index"

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
    },
    [ACTIONS.AGREGAR_TIPO_EVENTO] (context, payload) {
      context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
        api.guardarTipoEvento(payload)
        .then(response => {
        console.log(response);
          if (response.status == "200") {
            context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, response.data);
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
    },
    [ACTIONS.AGREGAR_EVENTO] (context, payload) {
      context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
      api.guardarEvento(payload)
      .then(response => {
      console.log(response);
        if (response.status == "201") {
          context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
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
    },
    [ACTIONS.OBTENER_TIPOS_EVENTOS] (context) {
      console.log("recupero datos");
      //context.dispatch(ACTIONS.ACTUALIZO_DATOS);
      context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
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
      context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  },
  [ACTIONS.ELIMINAR_TIPO_EVENTO] (context) {
    api.eliminarTipoEvento(context.getters.getTipoEvento().idTipoEvento)
    .then(response => {
      console.log(response);
      console.log("Elimino este tipo de evento: " + JSON.stringify(context.getters.getTipoEvento()));
      if (response.status == "200") {
        context.commit(MUTATIONS.ELIMINAR_TIPO_DE_EVENTO, context.getters.getTipoEvento());
      } 
      })
    .catch(error => {
      console.log(error);
      context.commit(MUTATIONS.GUARDO_ERROR, error);
      context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
    });
},
[ACTIONS.MODIFICAR_EVENTO] (context, payload) {
  api.guardarEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.MODIFICAR_UN_EVENTO, payload);
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
},
[ACTIONS.ELIMINAR_EVENTO] (context) {
  api.eliminarEvento(context.getters.getEvento().idEvento)
  .then(response => {
  console.log(response);
  console.log("Elimino este evento: " + JSON.stringify(context.getters.getEvento()));
    if (response.status == "204") {
      context.commit(MUTATIONS.ELIMINAR_UN_EVENTO, context.getters.getEvento());
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
},
[ACTIONS.ACTUALIZAR_TIPO_EVENTO] (context, payload) {
  api.actualizarTipoEvento(payload)
        .then(response => {
        console.log(response);
          if (response.status == "200") {
            context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, response.data);
            router.push('/listaTipoEvento');
          } 
          console.log(context.getters.getTipoEventos());
        })
        .catch(error => {
          console.log(error);
          context.commit(MUTATIONS.GUARDO_ERROR, error);
          context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
        });
},
[ACTIONS.EDITAR_TIPO_EVENTO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO, payload);
  router.push('/editarTipoEvento');
},
[ACTIONS.OBTENER_EVENTOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
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
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
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
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
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
        context.commit(MUTATIONS.GUARDAR_AGREGAR_ROL, response.data);
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
},
[ACTIONS.ELIMINAR_ROL] (context) {
  api.eliminarTipoUsuario(context.getters.getTipoUsuario().idTipoUsuario)
  .then(response => {
   console.log("Elimino este rol: " + JSON.stringify(context.getters.getTipoUsuario()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINAR_TIPO_DE_USUARIO, context.getters.getTipoUsuario());
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
},
[ACTIONS.OBTENER_ACTIVIDADES] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
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
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
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
},
[ACTIONS.OBTENER_USUARIOS] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
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
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
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
},
[ACTIONS.OBTENER_INFO_USUARIO_EMAIL] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.traerUsuarioEmail(payload, context.getters.getHash())
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
      router.push("/miPerfil");
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
},
[ACTIONS.AGREGAR_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.agregarActividad(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
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
},
[ACTIONS.ACTUALIZAR_ACTIVIDAD] (context, payload) {
  api.actualizarActividad(payload)
        .then(response => {
        console.log(response);
          if (response.status == "200") {
            context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, response.data);
            router.push('/listaActividades');
          } 
          console.log(context.getters.getActividades());
        })
        .catch(error => {
          console.log(error);
        });
},
[ACTIONS.EDITAR_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
  router.push('/editarActividad');
},
[ACTIONS.ELIMINAR_ACTIVIDAD] (context) {
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
},
[ACTIONS.EDITAR_EVENTO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_EVENTO, payload);
  router.push('/editarEvento');
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
},
[ACTIONS.REGISTRAR_USUARIO] (context, payload) {
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
},
[ACTIONS.FORMULARIO_INSCRIPCION_EVENTO] (context, payload) {
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
},
[ACTIONS.OBTENER_INSCRIPCION_X_USUARIO] (context) {
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
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
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.AGREGAR_CONTENIDO] (context, payload) {
  console.log(payload);
  let lista = context.getters.getEventos();
  let evento = {};
  for(let i = 0; i < lista.length; i++){
    if(payload.evento == lista[i].nombre){
      evento = lista[i];
    }
  }
    console.log("Evento elegido " + JSON.stringify(evento));
  context.commit(MUTATIONS.GUARDAR_CONTENIDO, payload);
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
[ACTIONS.ELIMINAR_USUARIO] (context) {
  api.eliminarUsuario(context.getters.getUsuario().idUsuario)
  .then(response => {
   console.log("Elimino este usuario: " + JSON.stringify(context.getters.getUsuario()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_USUARIO, true);
      context.commit(MUTATIONS.ELIMINAR_USUARIO, context.getters.getUsuario());
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
},
[ACTIONS.ACTUALIZAR_USUARIO] (context, payload) {
  api.actualizarUsuario(payload)
    .then(response => {
      if (response.status == "200") {
        context.commit(MUTATIONS.EDITO_USUARIO, true);
        context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
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
},
[ACTIONS.ACTUALIZO_DATOS] (context) {
  context.commit(MUTATIONS.ACTUALIZO_DATOS);
},
[ACTIONS.ELIMINAR_INSCRIPCION] (context) {
  api.eliminarInscripcion(context.getters.getInscripcion().idInscripcion)
  .then(response => {
   console.log("Elimino inscripcion: " + JSON.stringify(context.getters.getInscripcion()));
    if (response.status == "200") {
      context.commit(MUTATIONS.ELIMINO_INSCRIPCION, true);
      context.commit(MUTATIONS.ELIMINAR_UNA_INSCRIPCION, context.getters.getInscripcion());
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
},
[ACTIONS.TRAER_CONTENIDOS] (context) {
  /*
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, true);
  api.obtenerContenidos()
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.OBTENER_CONTENIDOS, response.data);
    } 
  })
  .catch(error => {
    console.log(error);
    context.commit(MUTATIONS.GUARDO_ERROR, error);
    context.dispatch(ACTIONS.IDENTIFICO_ERRORES);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
  */
 context.commit(MUTATIONS.OBTENER_CONTENIDOS, lista);
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
},
[ACTIONS.TRAER_FORMATO_EVENTOS] (context, payload) {
  const eventos = payload.map(e => e.nombre);
  context.commit(MUTATIONS.EVENTOS_FORMATEADOS, [...new Set(eventos)]);
},

[ACTIONS.EDITAR_USUARIO_LOGUEADO] () {
  router.push("/editarUsuario");
},

[ACTIONS.ACTUALIZAR_USUARIO_LOGUEADO] (context, payload) {
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
}