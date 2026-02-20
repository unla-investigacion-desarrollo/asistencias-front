<template>
  <v-tabs
    v-model="tab"
    align-tabs="center"
    color="deep-purple-accent-4"
  >
      <v-tab value="asistencia">Asistencia General</v-tab>
      <v-tab value="actividad">Asistencia Actividad</v-tab>
      <v-tab value="contenido">Contenido</v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item value="asistencia">
      <RegistrarAsistenciaView></RegistrarAsistenciaView>
    </v-tabs-window-item>
    
    <v-tabs-window-item value="actividad">
      <RegistrarAsistenciaActividadView></RegistrarAsistenciaActividadView>
    </v-tabs-window-item>

    <v-tabs-window-item value="contenido">
      <EscanerView></EscanerView>
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script>
import EscanerView from './EscanerView.vue';
import RegistrarAsistenciaActividadView from './RegistrarAsistenciaActividadView.vue';
import RegistrarAsistenciaView from './RegistrarAsistenciaView.vue';

export default {
    name: 'CamaraView',
    components: { EscanerView, RegistrarAsistenciaView, RegistrarAsistenciaActividadView },
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