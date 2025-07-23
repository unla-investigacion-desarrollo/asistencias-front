<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El audio fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El audio fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El audio fue eliminado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="audios.length != 0">
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
            Audio
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in audios"
          :key="item.idAudio"
        >
          <td>{{ item.idAudio }}</td>
          <td>{{ item.audio }}</td>
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
  <div class="text_menssage" v-if="audios.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este audio?"
        title="Eliminar Audio"
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
import { EDITAR_AUDIO, ELIMINAR_AUDIO, DETALLE_AUDIO, OBTENER_AUDIOS, ACEPTA_ELIMINAR_AUDIO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
export default {
  name: 'ListaAudio',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
      audios() {
          return this.$store.getters.getAudios();
      },
      elimino(){
        return this.$store.getters.getEliminoAudio();
      },
      agrego(){
        return this.$store.getters.getAgregoAudio();
      },
      edito(){
        return this.$store.getters.getEditoAudio();
      }
},
  methods: {
    editarItem(item){   
        this.$store.dispatch(EDITAR_AUDIO, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_AUDIO, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_AUDIO);
    },
    detalleItem(item){
        this.$store.dispatch(DETALLE_AUDIO, item);
    },
  },
  created() {
    this.$store.dispatch(OBTENER_AUDIOS);
    console.log(this.$store.getters.getAudios());
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