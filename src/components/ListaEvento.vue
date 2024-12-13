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
          <td>{{ item.fechaInicio }}</td>
          <td>{{ item.fechaFin }}</td>
          <td>{{ item.fechaCierre }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.tipoEvento.nombre }}</td>
          <td>{{ item.linkCertificado }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="eliminarItem(item)" icon="mdi-delete"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
              <v-btn class="remove_item" color="secondary" @click="inscripcionItem(item)" icon="mdi-note-plus-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
    
    
    </template>
  <script>
  import { EDITAR_EVENTO, ELIMINAR_EVENTO, OBTENER_EVENTOS, DETALLE_EVENTO, FORMULARIO_INSCRIPCION_EVENTO } from '../store/actions-types';
    export default {
      name: 'ListaEvento',
      components: {},
      data(){
        this.dialog = false;
      },
      computed: {
          eventos() {
              return this.$store.getters.getEventos();
      }
    },
    methods: {
      editarItem(item){
          this.$store.dispatch(EDITAR_EVENTO, item);
      },
      eliminarItem(item){
          this.$store.dispatch(ELIMINAR_EVENTO, item);
      },
      detalleItem(item){
          this.$store.dispatch(DETALLE_EVENTO, item);
      },
      inscripcionItem(item){
        this.$store.dispatch(FORMULARIO_INSCRIPCION_EVENTO, item);
      }
    },
    created() {
      this.$store.dispatch(OBTENER_EVENTOS);
      console.log(this.$store.getters.getEventos());
  },
  }
  </script>
  <style scoped>
  .remove_item{
      margin-left: 2%;
  }
  </style>