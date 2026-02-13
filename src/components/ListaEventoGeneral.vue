<template>
  <div v-if="agrego">
    <v-alert
      closable
      icon="$success"
      title="La inscripción al evento fue exitosa."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
  <div class="filtro">
      <v-row>
        <v-col>
          <v-btn color="primary" @click="mostrar">Filtros</v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="filtro" v-if="buscar">
      <v-row>
        <v-col cols="12" sm="4" md="4" lg="2">
          <v-select
          v-model="filtro"
          :items="opciones"
          label="Filtros"
        ></v-select>
        </v-col>
        <v-col v-if="filtro === 'Categoria'" cols="12" sm="4" md="4" lg="2">
          <v-autocomplete 
            v-model="parametro"
            :items="tiposEventos"
            label="Categoria"
            required
        ></v-autocomplete>
        </v-col>
        <v-col>
          <v-btn class="remove_item" color="primary" @click="busqueda" icon="mdi-magnify"></v-btn>
        </v-col>
      </v-row>
    </div>
  <div v-if="eventos.length != 0">
    <v-table
      height="auto"
      fixed-header
      class="rounded-lg mx-auto"
    >
      <thead>
        <tr>
          <th class="text-left">
            Nombre
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
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in eventos"
          :key="item.idEvento"
        >
          <td>{{ item.nombre }}</td>
          <td>{{ formatearFecha(item.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.fechaFin) }}</td>
          <td>{{ formatearFecha(item.fechaCierre) }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.tipoEvento.nombre }}</td>
          <td>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
              <v-btn class="remove_item" color="secondary" @click="inscripcionItem(item)" icon="mdi-note-plus-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="eventos.length == 0">
    <Mensaje-component valor="sin-eventos"></Mensaje-component>
  </div>
  </template>
<script>
import { filtroEvento } from '@/config';
import { OBTENER_EVENTOS_PUBLICOS, OBTENER_TIPOS_EVENTOS_PUBLICOS, DETALLE_EVENTO_GENERAL, FORMULARIO_INSCRIPCION_EVENTO, TRAER_EVENTOS_X_CATEGORIA, TRAER_EVENTOS_MES_ACTUAL_PUBLICO, OBTENER_PROXIMOS_EVENTOS } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaEventoGeneral',
  components: { MensajeComponent },
  data(){
    return {
      filtro: "Categoria",
      buscar: false,
      parametro: ""
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventos();
    },
    opciones(){
      return filtroEvento;
    },
    tiposEventos(){
      return this.$store.getters.getTiposEventosFormateados();
    },
},
  methods: {
    detalleItem(item){
        this.$store.dispatch(DETALLE_EVENTO_GENERAL, item);
    },
    inscripcionItem(item){
      let usuario = this.$store.getters.getUsuario();
      if(usuario.dni === ''){
        usuario = localStorage.getItem("usuario");
      }
      console.log("Este es el usuario: "+ usuario);
      if(this.$store.getters.getHash() === '' || usuario.dni === ''){
        this.$router.push({
          name: "ErroresView",
          params: {
            mensaje: "usuario-requerido",
          },
        });
      } else {
        this.$store.dispatch(FORMULARIO_INSCRIPCION_EVENTO, item);
      }
    },
    mostrar(){
      this.buscar = !this.buscar;
    },
    busqueda(){
        if(this.filtro == "Categoria" && this.parametro != ""){
          this.$store.dispatch(TRAER_EVENTOS_X_CATEGORIA, this.parametro);
        } else if (this.filtro == "Mes Actual"){
          this.$store.dispatch(TRAER_EVENTOS_MES_ACTUAL_PUBLICO, this.parametro);
        } else if (this.filtro == "Proximos Eventos"){
          this.$store.dispatch(OBTENER_PROXIMOS_EVENTOS, this.parametro);
        }
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
  watch: {
    filtro(nuevo, viejo) {
      if(nuevo != viejo){
        this.parametro = "";
        this.$store.dispatch(OBTENER_TIPOS_EVENTOS_PUBLICOS);
        this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
      }
    },
  },
  created() {
    this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
    this.$store.dispatch(OBTENER_TIPOS_EVENTOS_PUBLICOS);
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
.filtro { 
  margin: 1% 0px 1% 0px;
}

.boton{
  text-align: end;
}
</style>