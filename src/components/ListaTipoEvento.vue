<template>
  <div v-if="eventos.length != 0">
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
            Nombre
          </th>
          <th class="text-left">
            Descripción
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
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="eliminarItem(item)" icon="mdi-delete"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="eventos.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  
</template>
<script>
import { EDITAR_TIPO_EVENTO, ELIMINAR_TIPO_EVENTO, OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
  export default {
    name: 'ListaTipoEvento',
    components: { MensajeComponent },
    data(){
      this.dialog = false;
    },
    computed: {
        eventos() {
            return this.$store.getters.getTipoEventos();
    }
  },
  methods: {
    editarItem(item){
        this.$store.dispatch(EDITAR_TIPO_EVENTO, item);
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