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
          <td>{{ item.evento.nombre }}</td>
          <td>{{ item.cupo }}</td>
          <td>{{ item.cupoLimite }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="eliminarItem(item)" icon="mdi-delete"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
    
    
    </template>
  <script>
  import { EDITAR_ACTIVIDAD, ELIMINAR_ACTIVIDAD, OBTENER_ACTIVIDADES } from '../store/actions-types';
    export default {
      name: 'ListaActividad',
      components: {},
      data(){
        this.dialog = false;
      },
      computed: {
        actividades() {
              return this.$store.getters.getActividades();
      }
    },
    methods: {
      editarItem(item){
          this.$store.dispatch(EDITAR_ACTIVIDAD, item);
      },
      eliminarItem(item){
          this.$store.dispatch(ELIMINAR_ACTIVIDAD, item);
      }
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
  </style>