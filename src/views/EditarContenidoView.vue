<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Modificar Contenido</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
              <FormularioEditarContenido></FormularioEditarContenido>
            </v-card-text>
        </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Audios</span>
              </div>
            </template>
            <v-card-text class="bg-surface-light pt-4" :elevation="8">
              <div class="button_title">
                <v-btn color="primary" rounded="lg" @click="agregarAudio">Agregar</v-btn>
              </div>
              <ListaContenidoAudio></ListaContenidoAudio>
            </v-card-text>
        </v-card>
        </v-col>
      </v-row>
       <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Imagenes</span>
              </div>
            </template>
            <v-card-text class="bg-surface-light pt-4" :elevation="8">
              <div class="button_title">
                <v-btn color="primary" rounded="lg" @click="agregarImagen">Agregar</v-btn>
              </div>
              <ListaContenidoImagen></ListaContenidoImagen>
            </v-card-text>
        </v-card>
        </v-col>
      </v-row>
       <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Videos</span>
              </div>
            </template>
            <v-card-text class="bg-surface-light pt-4" :elevation="8">
              <div class="button_title">
                <v-btn color="primary" rounded="lg" @click="agregarVideo">Agregar</v-btn>
              </div>
              <ListaContenidoVideo></ListaContenidoVideo>
            </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>
import FormularioEditarContenido from '@/components/FormularioEditarContenido.vue';
import ListaContenidoAudio from '@/components/ListaContenidoAudio.vue';
import ListaContenidoImagen from '@/components/ListaContenidoImagen.vue';
import ListaContenidoVideo from '@/components/ListaContenidoVideo.vue';
import { AUDIO_NUEVO, IMAGEN_NUEVA, VIDEO_NUEVO } from '@/store/actions-types';

export default {
  name: 'EditarContenidoView',
  components: { FormularioEditarContenido, ListaContenidoAudio, ListaContenidoImagen, ListaContenidoVideo },
  methods: {
    agregarAudio(){
      this.$store.dispatch(AUDIO_NUEVO);
    },
    agregarImagen(){
      this.$store.dispatch(IMAGEN_NUEVA);
    },
    agregarVideo(){
      this.$store.dispatch(VIDEO_NUEVO);
    }
  }
}
</script>
  
<style scoped>
.title_section { background-color: #383854; }

.title {
    color: #fff;
}
.title_content{
  text-align: center;
}
.button_title {
    text-align: end;
    margin-bottom: 1%;
}
</style>