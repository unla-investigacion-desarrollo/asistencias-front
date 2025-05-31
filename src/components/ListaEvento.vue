<template>
  <div v-if="agrego">
    <v-alert
      closable
      icon="$success"
      title="El evento fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito">
    <v-alert
      closable
      icon="$success"
      title="El evento fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino">
    <v-alert
      closable
      icon="$success"
      title="El evento fue eliminado exitosamente."
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
            ID
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Descripción
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
            Certificado
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
          <td>{{ item.idEvento }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ formatearFecha(item.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.fechaFin) }}</td>
          <td>{{ formatearFecha(item.fechaCierre) }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.tipoEvento.nombre }}</td>
          <td>{{ item.linkCertificado }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
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
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este evento?"
        title="Eliminar Evento"
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
import { EDITAR_EVENTO, ELIMINAR_EVENTO, OBTENER_EVENTOS, DETALLE_EVENTO, FORMULARIO_INSCRIPCION_EVENTO, ACEPTA_ELIMINAR_EVENTO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaEvento',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
      eventos() {
          return this.$store.getters.getEventos();
      },
      elimino(){
        return this.$store.getters.getEliminoEvento();
      },
      agrego(){
        return this.$store.getters.getAgregoEvento();
      },
      edito(){
        return this.$store.getters.getEditoEvento();
      }

},
  methods: {
    editarItem(item){   
        this.$store.dispatch(EDITAR_EVENTO, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_EVENTO, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_EVENTO);
    },
    detalleItem(item){
        this.$store.dispatch(DETALLE_EVENTO, item);
    },
    inscripcionItem(item){
      this.$store.dispatch(FORMULARIO_INSCRIPCION_EVENTO, item);
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
    this.$store.dispatch(OBTENER_EVENTOS);
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