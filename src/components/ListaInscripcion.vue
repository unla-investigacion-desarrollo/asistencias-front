<template>
  <div v-if="inscripciones.length != 0">
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
            Apellido
          </th>
          <th class="text-left">
            DNI
          </th>
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
            Estado
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
          <td>{{ item.usuario.nombre }}</td>
          <td>{{ item.usuario.apellido }}</td>
          <td>{{ item.usuario.dni }}</td>
          <td>{{ item.evento.nombre }}</td>
          <td>{{ item.actividad.nombre }}</td>
          <td>{{ item.actividad.fechaInicio }}</td>
          <td>{{ item.actividad.fechaFin }}</td>
          <td>{{ item.actividad.edificio }}</td>
          <td>{{ item.actividad.ubicacion }}</td>
          <td>{{ item.actividad.estado }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-magnify"></v-btn>
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
        title="Eliminar Tipo de Evento"
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
  import { EDITAR_INSCRIPCION, ELIMINAR_INSCRIPCION, DETALLE_INSCRIPCION, OBTENER_INSCRIPCION_X_USUARIO, ACEPTA_ELIMINAR_INSCRIPCION } from '../store/actions-types';
  import MensajeComponent from './MensajeComponent.vue';
    export default {
      name: 'ListaInscripcion',
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
      }
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