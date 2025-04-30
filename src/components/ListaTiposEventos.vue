<template>
  <div v-if="eventos.length != 0">
    <v-data-table
      :headers="headers"
      :items="eventos"
      item-key="idTipoEvento"
      items-per-page="20"
    ></v-data-table>
  </div>
  <div class="text_menssage" v-if="eventos.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
</template>
<script>
import { OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
  export default {
    name: 'ListaTiposEventos',
    components: { MensajeComponent },
    data: () => ({
      headers: [
        { title: 'ID', value: 'idTipoEvento' },
        { title: 'Tipo de Evento', value: 'tipoEvento' },
        { title: 'Acciones'},
      ],
    }),
    computed: {
        eventos() {
            return this.$store.getters.getTipoEventos();
    }
  },
  created() {
    this.$store.dispatch(OBTENER_TIPOS_EVENTOS);
    console.log(this.$store.getters.getTipoEventos());
},
}
</script>
