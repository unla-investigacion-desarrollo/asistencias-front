<template>

    <v-form>
      <v-container>
        <v-row>
          <v-col>
              <v-btn rounded="xl" size="large" @click="agregarAudio" block>Agregar Audio</v-btn>
          </v-col>
          <v-col>
              <v-btn rounded="xl" size="large" @click="agregarImagen" block>Agregar Imagen</v-btn>
          </v-col>
          <v-col>
              <v-btn rounded="xl" size="large" @click="agregarVideo" block>Agregar Video</v-btn>
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
      <v-row>
          <v-col v-for="(item, index) in audios.slice(0,5)" :key="index">
            <v-text-field
                  v-model="item.audio"
                  :counter="45"
                  label="Link del Audio"
                  :rules="validationText"
              ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col v-for="(item, index) in imagenes.slice(0,5)" :key="index">
            <v-text-field
                  v-model="item.imagen"
                  :counter="45"
                  label="Link de la imagen"
                  :rules="validationText"
              ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col v-for="(item, index) in videos.slice(0,5)" :key="index">
            <v-text-field
                  v-model="item.video"
                  :counter="45"
                  label="Link del video"
                  :rules="validationText"
              ></v-text-field>
          </v-col>
      </v-row>
    
        <div class="container_button">
        <div class="content_button">
          <v-btn
            class="me-4"
            color="primary"
            @click="continuar"
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
      console.log(this.model);
      console.log("agregue el contenido");
      this.$store.dispatch(AGREGAR_CONTENIDO, this.model);
    },
    agregarAudio(){
      this.audios.push({ audio: '' });
    },
    agregarImagen(){
      this.imagenes.push({ imagen: '' });
    },
    agregarVideo(){
      this.videos.push({ video: '' });
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>