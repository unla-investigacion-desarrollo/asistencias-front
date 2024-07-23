<template>

    <v-form>
      <div class="container">
        <div class="titulo">
          <v-text-field
            v-model="model.titulo"
            :counter="45"
            label="Titulo"
            :rules="validationText"
            required
          ></v-text-field>
        </div>
        <div class="descripcion">
          <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
        </div>
        <div class="boton_audio">
            <v-btn rounded="xl" size="large" @click="agregarAudio" block>Agregar Audio</v-btn>
        </div>
        <div class="boton_imagen">
            <v-btn rounded="xl" size="large" @click="agregarImagen" block>Agregar Imagen</v-btn>
        </div>
        <div class="boton_video">
            <v-btn rounded="xl" size="large" @click="agregarVideo" block>Agregar Video</v-btn>
        </div>
        <div class="links">
        <div class="audio" v-for="(item, index) in audios" :key="index">
            <v-text-field
                v-model="item.audio"
                :counter="45"
                label="Link del Audio"
                :rules="validationText"
            ></v-text-field>
        </div>
        <div class="imagen" v-for="(item, index) in imagenes" :key="index">
            <v-text-field
                v-model="item.imagen"
                :counter="45"
                label="Link de la imagen"
                :rules="validationText"
            ></v-text-field>
        </div>
        
        <div class="video" v-for="(item, index) in videos" :key="index">
            <v-text-field
                v-model="item.video"
                :counter="45"
                label="Link del video"
                :rules="validationText"
            ></v-text-field>
        </div>
        </div>
      </div>
        <div class="container_button">
        <div class="content_button">
          <v-btn
            class="me-4"
            :color="color"
            @click="continuar"
          >
          Guardar
          </v-btn>
        </div>
      </div>
    
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
.container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 5% 5% 0px 5%;
  grid-gap: 2%;
}
.titulo{
  grid-column: 1/6;
  grid-row: 1;
}

.descripcion{
  grid-column: 1/6;
  grid-row: 2;
}

.audio {
  grid-column: 1/4;
}

.boton_audio {
  grid-column: 1/2;
  grid-row: 3;
  margin-top: 25%;
}


.imagen {
  grid-column: 1/4;
}

.boton_imagen {
  grid-column: 3/4;
  grid-row: 3;
  margin-top: 25%; 
}

.video {
  grid-column: 1/4;
}

.boton_video {
  grid-column: 5/6;
  grid-row: 3;
  margin-top: 25%;
}

.links{
    margin-top: 2%;
    grid-row: 5;
    grid-column: 1/6;
}

</style>