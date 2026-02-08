  <template>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
        <v-tab value="evento">Individuales</v-tab>
        <v-tab value="general">Generales</v-tab>
        <v-tab value="ranking">Ranking</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="evento">
            <EstadisticasXEventoView></EstadisticasXEventoView>
        </v-tabs-window-item>

        <v-tabs-window-item value="general">
          <EstadisticasGeneralesView></EstadisticasGeneralesView>
        </v-tabs-window-item>

        <v-tabs-window-item value="ranking">
            <RankingEventosView></RankingEventosView>
        </v-tabs-window-item>
      </v-tabs-window>
</template>
<script>
import EstadisticasGeneralesView from './EstadisticasGeneralesView.vue';
import EstadisticasXEventoView from './EstadisticasXEventoView.vue';
import RankingEventosView from './RankingEventosView.vue';
  
export default {
  name: 'EstadisticasView',
  components: { EstadisticasGeneralesView, EstadisticasXEventoView, RankingEventosView },
  data: () => ({
      tab: null,
    }),
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

.container { 
    margin-top: 2%;
}

</style>