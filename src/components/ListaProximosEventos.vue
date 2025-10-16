<template>
  <div v-if="eventos.length != 0">
    <v-table
      height="auto"
      fixed-header
      class="rounded-lg mx-auto"
    >
      <thead>
        <tr>
          <th class="text-left">
            Evento
          </th>
          <th class="text-left">
            Fecha de Inicio
          </th>
          <th class="text-left">
            Fecha de Fin
          </th>
          <th class="text-left">
            Cierre de Inscripción
          </th>
          <th class="text-left">
            Categoria
          </th>
          <th class="text-left">
            Detalle
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in eventos"
          :key="item.idEvento"
        >
          <td>{{ item.nombre }}</td>
          <td>{{ item.fechaInicio }}</td>
          <td>{{ item.fechaFin }}</td>
          <td>{{ item.fechaCierre }}</td>
          <td>{{ item.tipoEvento.nombre }}</td>
          <td>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="eventos.length == 0">
    <Mensaje-component valor="sin-eventos"></Mensaje-component>
  </div>

    
  </template>
<script>
import { OBTENER_PROXIMOS_EVENTOS, DETALLE_EVENTO_GENERAL } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaProximosEventos',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
      eventos() {
          return this.$store.getters.getEventos();
      },
},
  methods: {
    detalleItem(item){
        this.$store.dispatch(DETALLE_EVENTO_GENERAL, item);
    },
  },
  created() {
    this.$store.dispatch(OBTENER_PROXIMOS_EVENTOS);
    console.log(this.$store.getters.getEventos());
}
}
</script>
<style scoped>
.remove_item{
    margin-left: 2%;
}
.text_menssage{
  text-align: center;
  margin: 2%;
}

.alerta {
  margin: 2% 0px 2% 0px;
}
</style>