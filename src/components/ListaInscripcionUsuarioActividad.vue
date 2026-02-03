<template>
  <div v-if="inscripciones.length > 0">
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
            Actividad
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
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in inscripciones"
          :key="item.idInscripcion"
        >
          <td>{{ item.evento.nombre }}</td>
          <td>{{ item.actividad.nombre }}</td>
          <td>{{ formatearFecha(item.actividad.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.actividad.fechaFin) }}</td>
          <td>{{ item.actividad.edificio }}</td>
          <td>{{ item.actividad.ubicacion }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="inscripciones.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>  

  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar la inscripcion a este evento?"
        title="Eliminar Inscripción"
      >
        <template v-slot:actions>
          <v-btn
            text="SI"
            @click="eliminarItem() & (dialog = false)"
          ></v-btn>
          <v-btn
            text="NO"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
    
</template>
<script setup>
  import { ref } from 'vue'
  const dialog = ref(false)
</script>
<script>
import { EDITAR_INSCRIPCION, OBTENER_INSCRIPCION_X_USUARIO, ELIMINAR_INSCRIPCION, DETALLE_INSCRIPCION, ACEPTA_ELIMINAR_INSCRIPCION } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
  export default {
    name: 'ListaInscripcionUsuarioActividad',
    components: { MensajeComponent },
    data(){
      return {};
    },
    computed: {
      inscripciones() {
        return this.$store.getters.getInscripciones();
    }
  },
  methods: {
    editarItem(item){
      this.$store.dispatch(EDITAR_INSCRIPCION, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_INSCRIPCION, item);
    },
    eliminarItem(){
      this.$store.dispatch(ELIMINAR_INSCRIPCION);
    },
    detalleItem(item){
      this.$store.dispatch(DETALLE_INSCRIPCION, item);
    },
    formatearFecha(f){
      let formato = "";
      if(f != null){
        let anio = f.substring(0, 4);
        let mes = f.substring(5, 7);
        let dia = f.substring(8, 10);
        let hora = f.substring(11, 13);
        let min = f.substring(14, 16);
        formato = dia + "-" + mes + "-" + anio + " " +  hora + ":" + min;
      }
      return formato;
    },
  },
  created() {
    this.$store.dispatch(OBTENER_INSCRIPCION_X_USUARIO); 
    console.log(this.$store.getters.getInscripciones());
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
</style>