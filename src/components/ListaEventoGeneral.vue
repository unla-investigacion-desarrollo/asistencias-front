<template>
  <div v-if="agrego">
    <v-alert
      closable
      icon="$success"
      title="La inscripción al evento fue exitosa."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="eventos.length != 0">
    <v-table
      height="auto"
      fixed-header
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
            Cierre Inscripcion
          </th>
          <th class="text-left">
            Edificio
          </th>
          <th class="text-left">
            Ubicacion
          </th>
          <th class="text-left">
            Estado
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
          :key="item.idEvento"
        >
          <td>{{ item.nombre }}</td>
          <td>{{ formatearFecha(item.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.fechaFin) }}</td>
          <td>{{ formatearFecha(item.fechaCierre) }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.tipoEvento.nombre }}</td>
          <td>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
              <v-btn class="remove_item" color="secondary" @click="inscripcionItem(item)" icon="mdi-note-plus-outline"></v-btn>
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
import { OBTENER_EVENTOS, DETALLE_EVENTO, FORMULARIO_INSCRIPCION_EVENTO, OBTENER_EVENTO_X_TIPO_EVENTO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
import { usuario } from '@/config';
export default {
  name: 'ListaEventoGeneral',
  components: { MensajeComponent },
  data(){
    return {};
  },
  props: {
    filtro: {
      type: String,
      default: ""
    }
  },
  computed: {
      eventos() {
          return this.$store.getters.getEventos();
      }

},
  methods: {
    detalleItem(item){
        this.$store.dispatch(DETALLE_EVENTO, item);
    },
    inscripcionItem(item){
      if(usuario != null){
        this.$store.dispatch(FORMULARIO_INSCRIPCION_EVENTO, item);
      } else {
        this.$router.push({
          name: "ErroresView",
          params: {
            mensaje: "usuario-requerido",
          },
        });
      }
    },
    formatearFecha(f){
      let formato = "";
      if(f != null){
        let anio = f.substring(0, 4);
        let mes = f.substring(5, 7);
        let dia = f.substring(8, 10);
        let hora = f.substring(11, 13);
        let min = f.substring(14, 16);
        let seg = f.substring(17, 19);
        formato = dia + "-" + mes + "-" + anio + ", " +  hora + ":" + min + ":" + seg;
      }
      return formato;
    }
  },
  created() {
    if(this.filtro === ""){
      this.$store.dispatch(OBTENER_EVENTOS);
    } else{
      this.$store.dispatch(OBTENER_EVENTO_X_TIPO_EVENTO, this.filtro);
    }
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
</style>