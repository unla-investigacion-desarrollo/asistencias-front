import * as MUTATIONS from './mutations-types';

export default {

    [MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER]: (state, payload) => {
        state.spinner = payload;
    },
    [MUTATIONS.GUARDAR_AGREGAR_ROL]: (state, payload) => {
        state.tipoUsuario = payload;
    },
    [MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO]: (state, payload) => {
        state.tipoEvento = payload;
    },
    [MUTATIONS.GUARDAR_AGREGAR_EVENTO]: (state, payload) => {
        state.evento = payload;
    },
    [MUTATIONS.OBTENER_TIPOS_EVENTOS]: (state, payload) => {
        state.tipoEventos = payload;
    },
    [MUTATIONS.ELIMINAR_TIPO_DE_EVENTO]: (state, payload) => {
        let lista = state.tipoEventos;
        state.tipoEventos = lista.filter(e => e != payload);
        state.tipoEvento = {};
    },
    [MUTATIONS.ELIMINAR_UN_EVENTO]: (state, payload) => {
        let lista = state.eventos;
        state.eventos = lista.filter(e => e != payload);
        state.evento = {};
    },
    [MUTATIONS.MODIFICAR_UN_EVENTO]: (state, payload) => {
        state.evento = payload;
    },
    [MUTATIONS.OBTENER_LISTA_EVENTOS]: (state, payload) => {
        state.eventos = payload;
    },
    [MUTATIONS.EVENTOS_FORMATEADOS]: (state, payload) => {
        state.eventosFormateados = payload;
    },
    [MUTATIONS.REGISTRAR_PARTICIPANTE_AL_EVENTO]: (state, payload) => {
        state.inscripcion = payload;
    },
    [MUTATIONS.OBTENER_ROLES]: (state, payload) => {
        state.roles = payload;
    },
    [MUTATIONS.GUARDAR_TIPO_USUARIO]: (state, payload) => {
        state.tipoUsuario = payload;
    },
    [MUTATIONS.TRAER_ACTIVIDADES]: (state, payload) => {
        state.actividades = payload;
    },
    [MUTATIONS.TRAER_ACTIVIDAD]: (state, payload) => {
        state.actividad = payload;
    },
    [MUTATIONS.TRAER_USUARIOS]: (state, payload) => {
        state.usuarios = payload;
    },
    [MUTATIONS.TRAER_INFO_USUARIO]: (state, payload) => {
        state.usuario = payload;
    },
    [MUTATIONS.GUARDAR_ACTIVIDAD]: (state, payload) => {
        state.actividad = payload;
    },
    [MUTATIONS.ELIMINAR_UNA_ACTIVIDAD]: (state, payload) => {
        let lista = state.actividades;
        state.actividades = lista.filter(e => e != payload);
        state.actividad = {};
    },
    [MUTATIONS.GUARDAR_USUARIO]: (state, payload) => {
        state.usuario = payload;
        localStorage.setItem("usuario", JSON.stringify(payload));
    }, 
    [MUTATIONS.GUARDAR_AGREGAR_USUARIO]: (state, payload) => {
        state.usuario = payload;
    }, 
    [MUTATIONS.GUARDAR_EVENTO_INSCRIPCION]: (state, payload) => {
        state.inscripcion.evento = payload;
    }, 
    [MUTATIONS.GUARDAR_LOGIN]: (state, payload) => {
        state.usuario.hash = payload;
        localStorage.setItem("keyuser", payload);
    }, 
    [MUTATIONS.TRAER_INSCRIPCION_X_USUARIO]: (state, payload) => {
        state.inscripciones = payload;
    }, 
    [MUTATIONS.GUARDAR_INSCRIPCION_EVENTO]: (state, payload) => {
        state.inscripcion = payload;
    },
    [MUTATIONS.GUARDAR_CONTENIDO]: (state, payload) => {
        state.contenido = payload;
    },  
    [MUTATIONS.ELIMINAR_TIPO_DE_USUARIO]: (state, payload) => {
        let lista = state.roles;
        state.roles = lista.filter(e => e != payload);
        state.tipoUsuario = {};
    },  
    [MUTATIONS.ELIMINAR_USUARIO]: (state, payload) => {
        let lista = state.usuarios;
        state.usuarios = lista.filter(e => e != payload);
        state.usuario = {};
    },
    [MUTATIONS.ELIMINAR_UNA_INSCRIPCION]: (state, payload) => {
        let lista = state.inscripciones;
        state.inscripciones = lista.filter(e => e != payload);
        state.inscripcion = {};
    },
    [MUTATIONS.EDITO_ACTIVIDAD]: (state, payload) => {
        state.editoActividad = payload;
    }, 
    [MUTATIONS.ELIMINO_ACTIVIDAD]: (state, payload) => {
        state.eliminoActividad = payload;
    }, 
    [MUTATIONS.AGREGO_ACTIVIDAD]: (state, payload) => {
        state.agregoActividad = payload;
    }, 
    [MUTATIONS.EDITO_ROL]: (state, payload) => {
        state.editoRol = payload;
    }, 
    [MUTATIONS.ELIMINO_ROL]: (state, payload) => {
        state.eliminoRol = payload;
    }, 
     [MUTATIONS.AGREGO_ROL]: (state, payload) => {
        state.agregoRol = payload;
    }, 
    [MUTATIONS.EDITO_USUARIO]: (state, payload) => {
        state.editoUsuario = payload;
    }, 
    [MUTATIONS.ELIMINO_USUARIO]: (state, payload) => {
        state.eliminoUsuario = payload;
    }, 
    [MUTATIONS.AGREGO_USUARIO]: (state, payload) => {
        state.agregoUsuario = payload;
    }, 
    [MUTATIONS.EDITO_EVENTO]: (state, payload) => {
        state.editoEvento = payload;
    }, 
    [MUTATIONS.ELIMINO_EVENTO]: (state, payload) => {
        state.eliminoEvento = payload;
    }, 
    [MUTATIONS.AGREGO_EVENTO]: (state, payload) => {
        state.agregoEvento = payload;
    }, 
    [MUTATIONS.EDITO_TIPO_EVENTO]: (state, payload) => {
        state.editoTipoEvento = payload;
    }, 
     [MUTATIONS.ELIMINO_TIPO_EVENTO]: (state, payload) => {
        state.eliminoTipoEvento = payload;
    }, 
    [MUTATIONS.AGREGO_TIPO_EVENTO]: (state, payload) => {
        state.agregoTipoEvento = payload;
    }, 
    [MUTATIONS.EDITO_INSCRIPCION]: (state, payload) => {
        state.editoInscripcion = payload;
    }, 
    [MUTATIONS.ELIMINO_INSCRIPCION]: (state, payload) => {
        state.eliminoInscripcion = payload;
    }, 
    [MUTATIONS.AGREGO_INSCRIPCION]: (state, payload) => {
        state.registroInscripcion = payload;
    }, 
    [MUTATIONS.RECUPERAR_USUARIO]: (state) => {
        state.usuario = JSON.parse(localStorage.getItem("usuario"));
    }, 
    [MUTATIONS.GUARDO_ERROR]: (state, payload) => {
        state.error = payload;
    },  
    [MUTATIONS.CERRAR_SESION]: (state) => {
        state.usuario = {};
        state.usuario = { tipoUsuario: {
            rol: "Participante"
        }};
        state.usuario.hash = "";
        localStorage.removeItem("usuario");
        localStorage.removeItem("keyuser");
    }, 
    [MUTATIONS.ACTUALIZO_DATOS]: (state) => {
        let dni = state.usuario.dni; 
        let key = state.usuario.hash;
        if(dni == undefined || dni == null || dni == ""){
            state.usuario = JSON.parse(localStorage.getItem("usuario"));
        } 
        if(key == undefined || key == null || key == ""){
            state.usuario.hash = localStorage.getItem("keyuser");
        } 
    },  
    [MUTATIONS.OBTENER_CONTENIDO]: (state, payload) => {
        state.contenido = payload;
    },   
    [MUTATIONS.OBTENER_CONTENIDOS]: (state, payload) => {
        state.contenidos = payload;
        const contenidos = payload.map(c => c.titulo);
        state.titulosContenido = [...new Set(contenidos)];
    },
    [MUTATIONS.GUARDO_FILTRO_CATEGORIA_EVENTO]: (state, payload) => {
        state.filtroCategoriaEvento = payload;
    }, 
    [MUTATIONS.AGREGO_CONTENIDO]: (state, payload) => {
        state.agregoContenido = payload;
    }, 
    [MUTATIONS.EDITO_CONTENIDO]: (state, payload) => {
        state.editoContenido = payload;
    }, 
     [MUTATIONS.ELIMINO_CONTENIDO]: (state, payload) => {
        state.eliminoContenido = payload;
    }, 
    [MUTATIONS.ELIMINAR_CONTENIDO]: (state, payload) => {
        let lista = state.contenidos;
        state.contenidos = lista.filter(e => e != payload);
        state.contenido = {};
    },
    [MUTATIONS.AGREGO_AUDIO]: (state, payload) => {
        state.agregoAudio = payload;
    }, 
    [MUTATIONS.EDITO_AUDIO]: (state, payload) => {
        state.editoAudio = payload;
    }, 
     [MUTATIONS.ELIMINO_AUDIO]: (state, payload) => {
        state.eliminoAudio = payload;
    }, 
    [MUTATIONS.ELIMINAR_AUDIO]: (state, payload) => {
        let lista = state.audios;
        state.audios = lista.filter(e => e != payload);
        state.audio = {};
    },
    [MUTATIONS.AGREGO_IMAGEN]: (state, payload) => {
        state.agregoImagen = payload;
    }, 
    [MUTATIONS.EDITO_IMAGEN]: (state, payload) => {
        state.editoImagen = payload;
    }, 
     [MUTATIONS.ELIMINO_IMAGEN]: (state, payload) => {
        state.eliminoImagen = payload;
    }, 
    [MUTATIONS.ELIMINAR_IMAGEN]: (state, payload) => {
        let lista = state.imagenes;
        state.imagenes = lista.filter(e => e != payload);
        state.imagen = {};
    },
    [MUTATIONS.AGREGO_VIDEO]: (state, payload) => {
        state.agregoVideo = payload;
    }, 
    [MUTATIONS.EDITO_VIDEO]: (state, payload) => {
        state.editoVideo = payload;
    }, 
    [MUTATIONS.ELIMINO_VIDEO]: (state, payload) => {
        state.eliminoVideo = payload;
    }, 
    [MUTATIONS.ELIMINAR_VIDEO]: (state, payload) => {
        let lista = state.videos;
        state.videos = lista.filter(e => e != payload);
        state.video = {};
    },
    [MUTATIONS.GUARDAR_AUDIO]: (state, payload) => {
        state.audio = payload;
    }, 
    [MUTATIONS.GUARDAR_VIDEO]: (state, payload) => {
        state.video = payload;
    }, 
    [MUTATIONS.GUARDAR_IMAGEN]: (state, payload) => {
        state.imagen = payload;
    }, 
}