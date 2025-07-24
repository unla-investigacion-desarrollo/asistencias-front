<template>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
        <v-tab value="contenidos">Contenidos</v-tab>
        <v-tab value="audios">Audios</v-tab>
        <v-tab value="imagenes">Imagenes</v-tab>
        <v-tab value="videos">Videos</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
        
        <v-tabs-window-item value="contenidos">
            <ListaContenidosView></ListaContenidosView>
        </v-tabs-window-item>

        <v-tabs-window-item value="audios">
            <ListaAudiosView></ListaAudiosView>
        </v-tabs-window-item>

        <v-tabs-window-item value="imagenes">
            <ListaImagenesView></ListaImagenesView>
        </v-tabs-window-item>

        <v-tabs-window-item value="videos">
            <ListaVideosView></ListaVideosView>
        </v-tabs-window-item>

      </v-tabs-window>
  </template>
  
  <script>
import ListaContenidosView from './ListaContenidosView.vue';
import ListaAudiosView from './ListaAudiosView.vue';
import ListaImagenesView from './ListaImagenesView.vue';
import ListaVideosView from './ListaVideosView.vue';

export default {
  name: 'ContenidoAudioVisualView',
  components: { ListaContenidosView, ListaAudiosView, ListaImagenesView, ListaVideosView },
  data: () => ({
      tab: null,
    }),
    mounted() {
      const solapa = this.$route.params.solapa;
      console.log(solapa);
      this.tab = solapa;
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
</style>