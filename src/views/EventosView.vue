<template>

    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
        <v-tab value="eventos">Eventos</v-tab>
        <v-tab value="actividades">Actividades</v-tab>
        <v-tab value="tipo">Tipos de Eventos</v-tab>
        <v-tab value="inscriptos">Inscriptos</v-tab>
        <v-tab value="estadisticas">Estadisticas</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="eventos">
          <ListaEventosView></ListaEventosView>
        </v-tabs-window-item>

        <v-tabs-window-item value="actividades">
          <ListaActividadView></ListaActividadView>
        </v-tabs-window-item>

        <v-tabs-window-item value="tipo">
          <ListaTiposEventosView></ListaTiposEventosView>
        </v-tabs-window-item>

        <v-tabs-window-item value="inscriptos">
          <ListaInscriptosView></ListaInscriptosView>
        </v-tabs-window-item>

        <v-tabs-window-item value="estadisticas">
          <EstadisticasView></EstadisticasView>
        </v-tabs-window-item>

      </v-tabs-window>

</template>
<script>
import ListaTiposEventosView from './ListaTiposEventosView.vue';
import ListaEventosView from './ListaEventosView.vue';
import ListaActividadView from './ListaActividadView.vue';
import EstadisticasView from './EstadisticasView.vue';
import ListaInscriptosView from './ListaInscriptosView.vue';

export default {
    name: 'EventosView',
    components: { ListaEventosView, ListaTiposEventosView, ListaActividadView, EstadisticasView, ListaInscriptosView },
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