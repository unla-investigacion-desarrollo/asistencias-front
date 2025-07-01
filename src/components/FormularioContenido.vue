<template>
    <v-form v-model="formValid">
      <v-container>
        <v-row>
          <v-col>
            <v-btn class="button" color="secondary" @click="agregarAudio" prepend-icon="mdi-spotify">Agregar Audio</v-btn>
            <v-btn class="button" color="#f09433" @click="agregarImagen" prepend-icon="mdi-instagram">Agregar Imagen</v-btn>
            <v-btn class="button" color="error" @click="agregarVideo" prepend-icon="mdi-youtube">Agregar Video</v-btn>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <v-text-field
              v-model="model.titulo"
              :counter="45"
              label="Titulo"
              :rules="validationText"
              required
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
          </v-col>
      </v-row>
      <v-row v-for="(item, index) in audios.slice(0,5)" :key="index">
        <v-col>
          <v-text-field
                  v-model="item.audio"
                  :counter="45"
                  label="Link del Audio"
                  :rules="validationText"
              ></v-text-field>
        </v-col>
        <v-col>
          <v-btn class="remove_item" color="error" @click="eliminarAudio(index)" icon="mdi-delete"></v-btn>
        </v-col>    
      </v-row>
      <v-row v-for="(item, index) in imagenes.slice(0,5)" :key="index">
        <v-col>
          <v-text-field
                  v-model="item.imagen"
                  :counter="45"
                  label="Link de la imagen"
                  :rules="validationText"
              ></v-text-field>
            </v-col>
        <v-col>
          <v-btn class="remove_item" color="error" @click="eliminarImagen(index)" icon="mdi-delete"></v-btn>
        </v-col>
      </v-row>
      <v-row v-for="(item, index) in videos.slice(0,5)" :key="index">
        <v-col>
          <v-text-field
              v-model="item.video"
              :counter="45"
              label="Link del video"
              :rules="validationText"
          ></v-text-field>
        </v-col> 
        <v-col>
          <v-btn class="remove_item" color="error" @click="eliminarVideo(index)" icon="mdi-delete"></v-btn>
        </v-col> 
      </v-row>
    
        <div class="container_button">
        <div class="content_button">
          <v-btn
            class="me-4"
            color="primary"
            @click="continuar"
            :disabled="!formValid"
          >
          Guardar
          </v-btn>
        </div>
      </div>
    </v-container>
    </v-form>
</template>
  
<script>
import { AGREGAR_CONTENIDO, OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
export default {
  name: 'FormularioContenido',
  components: { },
  data() {
    return {
      model: this.$store.getters.getContenido(),
      color: "#8e2736",
      audios: [],
      videos: [],
      imagenes: [],
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getTipoEventos();
    }
  },
  created() {
      this.$store.dispatch(OBTENER_TIPOS_EVENTOS);
      console.log(this.$store.getters.getTipoEventos());
  },
  methods: {
    itemProps (item) {
        return {
          title: item.tipoEvento,
        }
      },
    continuar() {
      let contenido = {
        ... this.model,
        videos: this.videos,
        audios: this.audios,
        imagenes: this.imagenes
      };
      console.log(contenido);

      console.log("agregue el contenido");
      this.$store.dispatch(AGREGAR_CONTENIDO, contenido);
    },
    agregarAudio(){
      this.audios.push({ audio: '' });
    },
    agregarImagen(){
      this.imagenes.push({ imagen: '' });
    },
    agregarVideo(){
      this.videos.push({ video: '' });
    },
    eliminarAudio(index){
      this.audios.splice(index, 1);
    },
    eliminarImagen(index){
      this.imagenes.splice(index, 1);
    },
    eliminarVideo(index){
      this.videos.splice(index, 1);
    },
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
.button {
  margin-right: 2%;
}
</style>