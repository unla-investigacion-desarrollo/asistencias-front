import router from "@/router";
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
    });
},
[ACTIONS.MODIFICAR_EVENTO] (context, payload) {
  api.guardarEvento(payload)
  .then(response => {
  console.log(response);
    if (response.status == "201") {
      context.commit(MUTATIONS.MODIFICAR_UN_EVENTO, payload);
      router.push('unlaEventos')
    } 
  })
  .catch(error => {
    console.log(error);
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
    } 
  })
  .catch(error => {
    console.log(error);
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
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.EDITAR_ROL] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_ROL, payload);
  router.push('/editarRol');
},
[ACTIONS.ACTUALIZAR_ROL] (context, payload) {
  api.actualizarTipoUsuario(payload)
        .then(response => {
        console.log(response);
          if (response.status == "200") {
            context.commit(MUTATIONS.GUARDAR_AGREGAR_ROL, response.data);
            router.push('/listaRoles');
          } 
          console.log(context.getters.getRoles());
        })
        .catch(error => {
          console.log(error);
        });
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
    } 
  })
  .catch(error => {
    console.log(error);
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.AGREGAR_ACTIVIDAD] (context, payload) {
  api.agregarActividad(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
    } 
  })
  .catch(error => {
    console.log(error);
  });
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
[ACTIONS.ELIMINAR_ACTIVIDAD] (context, payload) {
  api.eliminarActividad(payload.idActividad)
  .then(response => {
  console.log(response);
    if (response.status == "204") {
      context.commit(MUTATIONS.ELIMINAR_UNA_ACTIVIDAD, payload);
    } 
  })
  .catch(error => {
    console.log(error);
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
[ACTIONS.DETALLE_ACTIVIDAD] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_ACTIVIDAD, payload);
  router.push('/detalleActividad');
},
[ACTIONS.REGISTRAR_USUARIO] (context, payload) {
  api.guardarUsuario(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      context.commit(MUTATIONS.AGREGO_USUARIO, true);
      setTimeout(() => { context.commit(MUTATIONS.AGREGO_USUARIO, false); }, 1000);
      context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
      router.push('miPerfil');
    } 
  })
  .catch(error => {
    console.log(error);
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
    } 
  })
  .catch(error => {
    console.log(error);
  });
},
[ACTIONS.MARCAR_ASISTENCIA] (payload) {
  api.marcarAsistencia(payload)
  .then(response => {
  console.log(response);
    if (response.status == "200") {
      router.push('/');
    } 
  })
  .catch(error => {
    console.log(error);
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
  });
  context.commit(MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER, false);
},
[ACTIONS.AGREGAR_CONTENIDO] (context, payload) {
  console.log(payload);
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
[ACTIONS.ACEPTA_ELIMINAR_TIPO_USUARIO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_TIPO_USUARIO, payload);
},
[ACTIONS.ACEPTA_ELIMINAR_USUARIO] (context, payload) {
  console.log(payload);
  context.commit(MUTATIONS.GUARDAR_AGREGAR_USUARIO, payload);
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
  });
},
[ACTIONS.ACTUALIZAR_USUARIO] (context, payload) {
  api.actualizarUsuario(payload)
        .then(response => {
          if (response.status == "200") {
            context.commit(MUTATIONS.EDITO_USUARIO, true);
            context.commit(MUTATIONS.GUARDAR_USUARIO, response.data);
            router.push('/unlaUsuarios');
          } 
        })
        .catch(error => {
          console.log(error);
        });
},
[ACTIONS.EDITAR_USUARIO] (context, payload) {
  context.commit(MUTATIONS.GUARDAR_AGREGAR_USUARIO, payload);
  router.push('/editarUsuario');
},
}