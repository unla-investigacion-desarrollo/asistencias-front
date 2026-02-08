<template> 
  <v-container>
      <v-row>
          <v-col v-for="(item, index) in items" :key="index" :cols="12" :md="2" >
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
import { OBTENER_EVENTOS_X_TIPOS_EVENTOS_PUBLICOS, OBTENER_TIPOS_EVENTOS_PUBLICOS } from '../store/actions-types';
import { tipoEventos } from '@/config/mock';

export default {
name: 'CategoriaEventosComponent',
data () {
      return {
      }
    },
    methods: {
      continuar(item) {
        console.log("voy al listado de la categoria del evento");  
        let lista = this.$store.getters.getTipoEventos();
        console.log("este es el item" + JSON.stringify(item));
        let tipo = null;
        if(lista.length > 0){
          lista.forEach(e => {
          if(item.nombre == e.nombre){
            tipo = e;
          }
          });
        }
        console.log("este es el tipo" + JSON.stringify(tipo));
        this.$store.dispatch(OBTENER_EVENTOS_X_TIPOS_EVENTOS_PUBLICOS, tipo.idTipoEvento); 
      }, 
      obtenerColor(){
        const h = Math.floor(Math.random() * 360);
        return `hsl(${h}, 70%, 55%)`;
      }
  },
    created() {
      this.$store.dispatch(OBTENER_TIPOS_EVENTOS_PUBLICOS);
  },
  computed: {
    items() {
      let lista = this.$store.getters.getTipoEventos();
      let listaAux = [];
      let imagenes = tipoEventos;
      let imagen = "";
      if(lista.length > 0){
        lista.forEach(e => {
        imagenes.forEach(i => {
        if(i.nombre == e.nombre){
          imagen = i.imagen;
        }
      });
        listaAux.push({ nombre: e.nombre, src: imagen });
        imagen = "";
      });
      }
      lista = listaAux;
      return lista;
  },
}
};
</script>

<style scoped>
.imagen {
  height: 230px;
}
.contenido {
  text-align: center;
}
</style>