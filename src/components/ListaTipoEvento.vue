<template>
  <v-table
    height="auto"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Tipo de Evento
        </th>
        <th class="text-left">
          Acciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in eventos"
        :key="item.idTipoEvento"
      >
        <td>{{ item.idTipoEvento }}</td>
        <td>{{ item.tipoEvento }}</td>
        <td><v-btn @click="editarItem(item)" color="warning" icon="mdi-pencil"></v-btn>
            <v-btn class="remove_item" color="error" @click="eliminarItem(item)" icon="mdi-delete"></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  </template>
<script>
import { ELIMINAR_TIPO_EVENTO, OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
  export default {
    name: 'ListaTipoEvento',
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
  methods: {
    editarItem(item){
        return item;
    },
    eliminarItem(item){
        this.$store.dispatch(ELIMINAR_TIPO_EVENTO, item);
    }
  },
  created() {
    this.$store.dispatch(OBTENER_TIPOS_EVENTOS);
    console.log(this.$store.getters.getTipoEventos());
},
}
</script>
<style scoped>
.remove_item{
    margin-left: 2%;
}
</style>