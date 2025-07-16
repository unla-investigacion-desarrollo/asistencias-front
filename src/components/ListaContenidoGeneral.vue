<template>
  <div v-if="contenidos.length != 0">
    <div class="filtro">
      <v-row >
        <v-col>
          <v-btn color="primary" @click="mostrar">Filtros</v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="filtro" v-if="buscar">
      <v-row>
        <v-col>
          <v-select
          v-model="filtro"
          :items="opciones"
          label="Filtros"
        ></v-select>
        </v-col>
        <v-col>
          <v-autocomplete v-if="filtro === 'Evento'"
            v-model="parametro"
            :items="eventos"
            label="Evento"
            required
        ></v-autocomplete>
          <v-autocomplete v-if="filtro === 'Titulo'"
            v-model="parametro"
            :items="titulos"
            label="Titulo"
            required
        ></v-autocomplete>
        </v-col>
        <v-col>
          <v-btn class="remove_item" color="primary" @click="busqueda" icon="mdi-magnify"></v-btn>
        </v-col>
      </v-row>
    </div>
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
import { filtroContenido } from "@/config/index";
import { TRAER_CONTENIDOS, DETALLE_CONTENIDO, OBTENER_EVENTOS, TRAER_CONTENIDOS_X_EVENTO, TRAER_CONTENIDOS_X_TITULO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
    export default {
      name: 'ListaContenidoGeneral',
      components: { MensajeComponent },
      data(){
        return {
          filtro: "Evento",
          buscar: false,
          parametro: ""
        };
      },
      computed: {
        contenidos() {
          return this.$store.getters.getContenidos();
        },
        eventos() {
          return this.$store.getters.getEventosFormateados();
        },
        opciones(){
          return filtroContenido;
        },
        titulos(){
          return this.$store.getters.getTitulosContenido();
        },
    },
    methods: {
      detalleItem(item){
        console.log("Este es el item" + JSON.stringify(item));
        this.$store.dispatch(DETALLE_CONTENIDO, item);
      },
      mostrar(){
        this.buscar = !this.buscar;
      },
      busqueda(){
        if(this.filtro == "Evento"){
          this.$store.dispatch(TRAER_CONTENIDOS_X_EVENTO, this.parametro);
        } else {
          this.$store.dispatch(TRAER_CONTENIDOS_X_TITULO, this.parametro);
        }
      }
    },
    created() {
      this.$store.dispatch(TRAER_CONTENIDOS);
      this.$store.dispatch(OBTENER_EVENTOS);
      console.log(this.$store.getters.getContenidos());
      console.log(this.$store.getters.getEventos());
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

.filtro { 
  margin: 2% 0px 2% 0px;
}
  </style>