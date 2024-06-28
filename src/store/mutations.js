import * as MUTATIONS from './mutations-types';

export default {

    [MUTATIONS.ACTIVAR_DESACTIVAR_SPINNER]: (state, payload) => {
        state.spinner = payload;
    },
    [MUTATIONS.GUARDAR_TIPO_USUARIO]: (state, payload) => {
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
    }
}
