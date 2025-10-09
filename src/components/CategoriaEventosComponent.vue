<template> 
  <v-container>
      <v-row>
          <v-col v-for="(item, index) in items" :key="index" :cols="12" :md="3">
            <v-hover v-slot="{ isHovering, props }">
            <v-card
                class="mx-auto"
                max-width="344"
                v-bind="props"
            >
                <v-img class="imagen" :src="item.src"></v-img>

                <v-card-text>
                  <h2 class="text-h6 text-primary">
                    {{ item.nombre }}
                  </h2>
                </v-card-text>

                <v-overlay
                  :model-value="!!isHovering"
                  class="align-center justify-center"
                  scrim="#036358"
                  contained
                >
                <v-btn @click="continuar(item)" variant="flat">Conocer más</v-btn>
                </v-overlay>
            </v-card>
            </v-hover>
        </v-col>
      <v-responsive width="100%"></v-responsive>
    </v-row>
  </v-container>
</template>

<script>
import { OBTENER_EVENTOS_X_CATEGORIA } from '../store/actions-types';
import { normalizarDatos } from '../config/index';

export default {
name: 'CategoriaEventosComponent',
data () {
      return {
        items: [
          {
            nombre: "Arte",
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUeyIQ_VnqRdoxSO9kCbnMow1O7C9tbKRBQ&s',
          },
          {
            nombre: "Cursos",
            src: 'https://www.ireland-experience.com/wp-content/uploads/2021/02/adu.jpg',
          },
          {
            nombre: "Música",
            src: 'https://laciudadavellaneda.com.ar/wp-content/uploads/orquesta-18.jpg'
          },
          {
            nombre: "Jornadas Profesionales",
            src: 'https://dataconurbano.net/wp-content/uploads/2025/08/Jornadas-de-Economia-Politica-2025-en-la-UNLa1.jpg',
          },
        ],
      }
    },
    methods: {
      continuar(item) {
        console.log("voy al listado de la categoria del evento");   
        let filtro = normalizarDatos(item.nombre);
        this.$store.dispatch(OBTENER_EVENTOS_X_CATEGORIA, filtro);
      }, 
  }
}
</script>

<style scoped>
.imagen {
  height: 230px;
}
</style>