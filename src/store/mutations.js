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
    }
}
