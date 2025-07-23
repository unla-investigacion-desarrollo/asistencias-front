<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La imagen fue agregada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La imagen fue modificada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La imagen fue eliminada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="imagenes.length != 0">
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
            Imagen
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in imagenes"
          :key="item.idImagen"
        >
          <td>{{ item.idImagen }}</td>
          <td>{{ item.imagen }}</td>
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
  <div class="text_menssage" v-if="imagenes.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar esta imagen?"
        title="Eliminar Imagen"
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
import { EDITAR_IMAGEN, ELIMINAR_IMAGEN, OBTENER_IMAGENES, DETALLE_IMAGEN, ACEPTA_ELIMINAR_IMAGEN } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaImagen',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
      imagenes() {
          return this.$store.getters.getImagenes();
      },
      elimino(){
        return this.$store.getters.getEliminoImagen();
      },
      agrego(){
        return this.$store.getters.getAgregoImagen();
      },
      edito(){
        return this.$store.getters.getEditoImagen();
      }
},
  methods: {
    editarItem(item){   
        this.$store.dispatch(EDITAR_IMAGEN, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_IMAGEN, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_IMAGEN);
    },
    detalleItem(item){
        this.$store.dispatch(DETALLE_IMAGEN, item);
    },
  },
  created() {
    this.$store.dispatch(OBTENER_IMAGENES);
    console.log(this.$store.getters.getImagenes());
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