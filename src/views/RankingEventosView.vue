  <template>
    <v-container class="container">
      <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Ranking de Eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4 title_content">
                <v-row class="d-flex justify-center" >
                  <v-col :cols="12" :md="10">
                    <RankingEventos></RankingEventos>
                  </v-col>
                </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import RankingEventos from '@/components/RankingEventos.vue';

export default {
  name: 'RankingEventosView',
  components: { RankingEventos },
  data() {
    return {};
  },
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