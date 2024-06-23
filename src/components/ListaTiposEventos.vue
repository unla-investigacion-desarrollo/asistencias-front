<template>
    <v-data-table
      :headers="headers"
      :items="eventos"
      item-key="idTipoEvento"
      items-per-page="20"
    ></v-data-table>
  </template>
<script>
import { OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
  export default {
    name: 'ListaTiposEventos',
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
