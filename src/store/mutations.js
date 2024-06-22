import Vue from "vue";
import * as MUTATIONS from './mutations-types';

export default {

    [MUTATIONS.ACTIVAR_SPINNER]: (state, payload) => {
        Vue.set(state, "spinner", payload);
    },
    [MUTATIONS.DESACTIVAR_SPINNER]: (state, payload) => {
        Vue.set(state, "spinner", !payload);
    },
    [MUTATIONS.GUARDAR_TIPO_USUARIO]: (state, payload) => {
        Vue.set(state, "tipoUsuario", payload);
    },
    [MUTATIONS.GUARDAR_AGREGAR_TIPO_EVENTO]: (state, payload) => {
        Vue.set(state, "tipoEvento", payload);
    },
    [MUTATIONS.GUARDAR_AGREGAR_EVENTO]: (state, payload) => {
        state.evento = payload;
    },
    [MUTATIONS.OBTENER_TIPOS_EVENTOS]: (state, payload) => {
        state.tipoEventos = payload;
    }
}
