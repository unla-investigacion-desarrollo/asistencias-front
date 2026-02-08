<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El contenido fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El contenido fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El contenido fue eliminado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
  <div v-if="contenidos.length != 0">
    <div class="filtro">
      <v-row >
        <v-col>
          <v-btn color="primary" @click="mostrar">Filtros</v-btn>
        </v-col>
        <v-col class="boton">
          <v-btn color="primary" rounded="lg" @click="agregar">Agregar</v-btn>
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
      class="rounded-lg mx-auto"
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
          <td>{{ item.nombreEvento }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
              <v-btn class="remove_item" color="success" @click="generarQR(item)" icon="mdi-qrcode"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="contenidos.length == 0">
      <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este contenido?"
        title="Eliminar Contenido"
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
import { filtroContenido } from "@/config/index";
import { OBTENER_CONTENIDOS_PUBLICOS, DETALLE_CONTENIDO, TRAER_CONTENIDOS_X_EVENTO, 
  TRAER_CONTENIDOS_X_TITULO, ACEPTA_ELIMINAR_CONTENIDO, EDITAR_CONTENIDO, ELIMINAR_CONTENIDO, CONTENIDO_NUEVO,
  GENERAR_QR,
  OBTENER_EVENTOS_PUBLICOS} from '../store/actions-types';
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
        elimino(){
        return this.$store.getters.getEliminoContenido();
        },
        agrego(){
          return this.$store.getters.getAgregoContenido();
        },
        edito(){
          return this.$store.getters.getEditoContenido();
        }
    },
    methods: {
      editarItem(item){   
        this.$store.dispatch(EDITAR_CONTENIDO, item);
      },
      modalEliminar(item){
        this.$store.dispatch(ACEPTA_ELIMINAR_CONTENIDO, item);
      },
      eliminarItem(){
        this.$store.dispatch(ELIMINAR_CONTENIDO);
      },
      detalleItem(item){
        console.log("Este es el item" + JSON.stringify(item));
        this.$store.dispatch(DETALLE_CONTENIDO, item);
      },
      generarQR(item){
        this.$store.dispatch(GENERAR_QR, item);
      },
      mostrar(){
        this.buscar = !this.buscar;
      },
      agregar(){
            this.$store.dispatch(CONTENIDO_NUEVO);
      },
      busqueda(){
        if(this.filtro == "Evento" && this.parametro != ""){
          this.$store.dispatch(TRAER_CONTENIDOS_X_EVENTO, this.parametro);
        } else if (this.filtro == "Titulo" && this.parametro != ""){
          this.$store.dispatch(TRAER_CONTENIDOS_X_TITULO, this.parametro);
        }
      }
    },
    watch: {
      filtro(nuevo, viejo) {
        if(nuevo != viejo){
          this.parametro = "";
          this.$store.dispatch(OBTENER_CONTENIDOS_PUBLICOS);
          this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
        }
      },
    },
    created() {
      this.$store.dispatch(OBTENER_CONTENIDOS_PUBLICOS);
      this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
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

.boton{
  text-align: end;
}
  </style>