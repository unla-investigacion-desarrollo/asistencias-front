<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El video fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El video fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El video fue eliminado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
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
          <v-autocomplete v-if="filtro === 'Contenido'"
            v-model="parametro"
            :items="contenidos"
            label="Contenido"
            required
        ></v-autocomplete>
        </v-col>
        <v-col>
          <v-btn class="remove_item" color="primary" @click="busqueda" icon="mdi-magnify"></v-btn>
        </v-col>
      </v-row>
    </div>
  <div v-if="videos.length != 0">
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
            Video
          </th>    
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in videos"
          :key="item.idVideo"
        >
          <td>{{ item.idVideo }}</td>
          <td>{{ item.video }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="videos.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este video?"
        title="Eliminar Video"
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
import { EDITAR_VIDEO, ELIMINAR_VIDEO, OBTENER_VIDEOS, ACEPTA_ELIMINAR_VIDEO, OBTENER_CONTENIDOS_PUBLICOS, OBTENER_EVENTOS_PUBLICOS, VIDEO_NUEVO, OBTENER_VIDEOS_X_EVENTO, OBTENER_VIDEOS_X_CONTENIDO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
import { filtroVideo } from '@/config';
export default {
  name: 'ListaVideo',
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
      return this.$store.getters.getContenidosFormateados();
    },
    eventos() {
      return this.$store.getters.getEventosFormateados();
    },
    opciones(){
      return filtroVideo;
    },
    videos() {
        return this.$store.getters.getVideos();
    },
    elimino(){
      return this.$store.getters.getEliminoVideo();
    },
    agrego(){
      return this.$store.getters.getAgregoVideo();
    },
    edito(){
      return this.$store.getters.getEditoVideo();
    }
},
  methods: {
    editarItem(item){   
        this.$store.dispatch(EDITAR_VIDEO, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_VIDEO, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_VIDEO);
    },
    busqueda(){
      if(this.filtro == "Evento" && this.parametro != ""){
        this.$store.dispatch(OBTENER_VIDEOS_X_EVENTO, this.parametro);
      } else if (this.filtro == "Contenido" && this.parametro != ""){
        this.$store.dispatch(OBTENER_VIDEOS_X_CONTENIDO, this.parametro);
      }
    },
    mostrar(){
      this.buscar = !this.buscar;
    },
    agregar(){
          this.$store.dispatch(VIDEO_NUEVO);
    },
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
    this.$store.dispatch(OBTENER_VIDEOS);
    console.log(this.$store.getters.getVideos());
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