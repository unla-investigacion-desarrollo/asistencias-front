<template>
  <div v-if="actividades.length != 0">
    <v-table
      height="auto"
      fixed-header
      class="rounded-lg mx-auto"
    >
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Fecha Inicio
          </th>
          <th class="text-left">
            Fecha Fin
          </th>
          <th class="text-left">
            Edificio
          </th>
          <th class="text-left">
            Ubicacion
          </th>
          <th class="text-left">
            Evento
          </th>
          <th class="text-left">
            Cupo
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in actividades"
          :key="item.idActividad"
        >
          <td>{{ item.nombre }}</td>
          <td>{{ formatearFecha(item.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.fechaFin) }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.evento.nombre }}</td>
          <td>{{ item.cupo }}</td>
          <td>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-magnify"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="actividades.length == 0">
      <Mensaje-component valor="sin-registro-actividades"></Mensaje-component>
  </div>
</template>
<script>
import { DETALLE_ACTIVIDAD_GENERAL, OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaActividadGeneral',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
    actividades() {
      return this.$store.getters.getActividades();
    },
},
methods: {
  detalleItem(item){
    this.$store.dispatch(DETALLE_ACTIVIDAD_GENERAL, item);
  },
  formatearFecha(f){
      let formato = "";
      if(f != null){
        let anio = f.substring(0, 4);
        let mes = f.substring(5, 7);
        let dia = f.substring(8, 10);
        let hora = f.substring(11, 13);
        let min = f.substring(14, 16);
        formato = dia + "-" + mes + "-" + anio + ", " +  hora + ":" + min;
      }
      return formato;
    }
},
created() {
  if(this.$store.getters.getActividades().length == 0){
    if(this.$store.getters.getEvento().nombre != ""){
      this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.$store.getters.getEvento());
    } 
  }
  console.log(this.$store.getters.getActividades());
},
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