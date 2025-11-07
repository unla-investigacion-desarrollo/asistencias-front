<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La actividad fue agregada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La actividad fue modificada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La actividad fue eliminada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
  <div v-if="actividades.length != 0">
    <v-table
      height="auto"
      fixed-header
      class="rounded-lg mx-auto"
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
            Edificio
          </th>
          <th class="text-left">
            Ubicacion
          </th>
          <th class="text-left">
            Estado
          </th>
          <th class="text-left">
            Evento
          </th>
          <th class="text-left">
            Cupo
          </th>
          <th class="text-left">
            Cupo Limite
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
          <td>{{ item.idActividad }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.fechaInicio }}</td>
          <td>{{ item.fechaFin }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.nombreEvento }}</td>
          <td>{{ item.cupo }}</td>
          <td>{{ item.cupoMax }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete" v-if="!this.validoPas"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="actividades.length == 0">
      <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar esta actividad?"
        title="Eliminar Actividad"
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
import { EDITAR_ACTIVIDAD, ELIMINAR_ACTIVIDAD, OBTENER_ACTIVIDADES, DETALLE_ACTIVIDAD, ACEPTA_ELIMINAR_ACTIVIDAD } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaActividad',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
    actividades() {
      return this.$store.getters.getActividades();
    },
    elimino(){
      return this.$store.getters.getEliminoActividad();
    },
    agrego(){
      return this.$store.getters.getAgregoActividad();
    },
    edito(){
      return this.$store.getters.getEditoActividad();
    },
    validoPas(){
        return this.$store.getters.getPas();
    }
},
methods: {
  editarItem(item){
    this.$store.dispatch(EDITAR_ACTIVIDAD, item);
  },
  modalEliminar(item){
    this.$store.dispatch(ACEPTA_ELIMINAR_ACTIVIDAD, item);
  },
  eliminarItem(){
    this.$store.dispatch(ELIMINAR_ACTIVIDAD);
  },
  detalleItem(item){
    this.$store.dispatch(DETALLE_ACTIVIDAD, item);
  },
},
created() {
  this.$store.dispatch(OBTENER_ACTIVIDADES);
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