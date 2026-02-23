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
import { EDITAR_AUDIO, ELIMINAR_AUDIO, OBTENER_AUDIOS, ACEPTA_ELIMINAR_AUDIO, OBTENER_AUDIOS_X_EVENTO, OBTENER_AUDIOS_X_CONTENIDO, OBTENER_EVENTOS_PUBLICOS, OBTENER_CONTENIDOS_PUBLICOS, AUDIO_NUEVO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
import { filtroAudio } from '@/config';
export default {
  name: 'ListaAudio',
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
        return filtroAudio;
      },
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
    busqueda(){
      if(this.filtro == "Evento" && this.parametro != ""){
        this.$store.dispatch(OBTENER_AUDIOS_X_EVENTO, this.parametro);
      } else if (this.filtro == "Contenido" && this.parametro != ""){
        this.$store.dispatch(OBTENER_AUDIOS_X_CONTENIDO, this.parametro);
      }
    },
    mostrar(){
      this.buscar = !this.buscar;
    },
    agregar(){
          this.$store.dispatch(AUDIO_NUEVO);
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
    this.$store.dispatch(OBTENER_AUDIOS);
    this.$store.dispatch(OBTENER_CONTENIDOS_PUBLICOS);
    this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
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

.filtro { 
  margin: 2% 0px 2% 0px;
}

.boton{
  text-align: end;
}
</style>