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
            Rol
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in roles"
          :key="item.idTipoUsuario"
        >
          <td>{{ item.idTipoUsuario }}</td>
          <td>{{ item.rol }}</td>
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
  import { EDITAR_ROL, ELIMINAR_ROL, OBTENER_ROLES } from '../store/actions-types';
    export default {
      name: 'ListaTipoUsuario',
      components: {},
      data(){
        this.dialog = false;
      },
      computed: {
          roles() {
              return this.$store.getters.getRoles();
      }
    },
    methods: {
      editarItem(item){
          this.$store.dispatch(EDITAR_ROL, item);
      },
      eliminarItem(item){
          this.$store.dispatch(ELIMINAR_ROL, item);
      }
    },
    created() {
      this.$store.dispatch(OBTENER_ROLES);
      console.log(this.$store.getters.getRoles());
  },
  }
  </script>
  <style scoped>
  .remove_item{
      margin-left: 2%;
  }
  </style>