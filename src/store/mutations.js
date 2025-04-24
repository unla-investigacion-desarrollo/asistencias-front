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
    },
    [MUTATIONS.ELIMINAR_UN_EVENTO]: (state, payload) => {
        let lista = state.eventos;
        state.eventos = lista.filter(e => e != payload);
    },
    [MUTATIONS.MODIFICAR_UN_EVENTO]: (state, payload) => {
        state.evento = payload;
    },
    [MUTATIONS.OBTENER_LISTA_EVENTOS]: (state, payload) => {
        state.eventos = payload;
    },
    [MUTATIONS.REGISTRAR_PARTICIPANTE_AL_EVENTO]: (state, payload) => {
        state.inscripcion = payload;
    },
    [MUTATIONS.OBTENER_ROLES]: (state, payload) => {
        state.roles = payload;
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
    },
    [MUTATIONS.GUARDAR_USUARIO]: (state, payload) => {
        state.usuario = payload;
        localStorage.setItem("usuario", JSON.stringify(payload));
    }, 
    [MUTATIONS.GUARDAR_EVENTO_INSCRIPCION]: (state, payload) => {
        state.inscripcion.evento = payload;
    }, 
    [MUTATIONS.GUARDAR_LOGIN]: (state, payload) => {
        state.usuario.hash = payload;
        localStorage.setItem("keyuser", payload);
    }, 
}