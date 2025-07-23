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
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
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
import { EDITAR_VIDEO, ELIMINAR_VIDEO, OBTENER_VIDEOS, DETALLE_VIDEO, ACEPTA_ELIMINAR_VIDEO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaVideo',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
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
    detalleItem(item){
        this.$store.dispatch(DETALLE_VIDEO, item);
    },
  },
  created() {
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
</style>