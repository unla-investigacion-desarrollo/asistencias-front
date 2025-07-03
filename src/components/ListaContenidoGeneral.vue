<template>
  <div v-if="contenidos.length != 0">
    <v-table
      height="auto"
      fixed-header
    >
      <thead>
        <tr>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Evento
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in contenidos"
          :key="item.idContenido"
        >
          <td>{{ item.titulo }}</td>
          <td>{{ item.evento.nombre }}</td>
          <td>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-magnify"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="contenidos.length == 0">
      <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  
</template>
<script>
import { TRAER_CONTENIDOS, DETALLE_CONTENIDO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
    export default {
      name: 'ListaContenidoGeneral',
      components: { MensajeComponent },
      data(){
        return {};
      },
      computed: {
        contenidos() {
          return this.$store.getters.getContenidos();
        }
    },
    methods: {
      detalleItem(item){
        console.log("Este es el item" + JSON.stringify(item));
        this.$store.dispatch(DETALLE_CONTENIDO, item);
      }
    },
    created() {
      this.$store.dispatch(TRAER_CONTENIDOS);
      console.log(this.$store.getters.getContenidos());
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