<template>
    <div v-if="usuarios.length != 0">
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
                Apellido
            </th>
            <th class="text-left">
                DNI
            </th>
            <th class="text-left">
                Email
            </th>
            <th class="text-left">
                Usuario
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
            v-for="item in usuarios"
            :key="item.idUsuario"
            >
            <td>{{ item.idUsuario }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.dni }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.usuario }}</td>
            <td>{{ item.tipoUsuario.rol }}</td>
            <td>
                <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
                <v-btn class="remove_item" color="error" @click="eliminarItem(item)" icon="mdi-delete"></v-btn>
            </td>
            <td></td>
            </tr>
        </tbody>
        </v-table>
    </div>
    <div class="text_menssage" v-if="usuarios.length == 0">
        <Mensaje-component valor="sin-registros"></Mensaje-component>
    </div>
    
    </template>
  <script>
  import { EDITAR_ROL, ELIMINAR_ROL, OBTENER_USUARIOS } from '../store/actions-types';
  import MensajeComponent from './MensajeComponent.vue';
    export default {
      name: 'ListaTipoUsuario',
      components: { MensajeComponent },
      data(){
        this.dialog = false;
      },
      computed: {
          usuarios() {
              return this.$store.getters.getUsuarios();
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
      this.$store.dispatch(OBTENER_USUARIOS);
      console.log(this.$store.getters.getUsuarios());
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