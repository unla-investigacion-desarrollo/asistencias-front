  <template>
    <v-container class="container">
      <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Estadisticas de los eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4 title_content">
                <v-row>
                    <v-col>
                        <Doughnut :data="data" :options="options" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            class="me-4"
                            color="primary"
                            @click="volver"
                            >
                            Volver
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
  
export default {
  name: 'EstadisticasView',
  components: { Doughnut },
  data() {
    return {};
  },
  computed: {
        data(){
          const data = {
            labels: ['Inscripciones', 'Asistencias'],
            datasets: [
              {
                backgroundColor: ['#B71C1C', '#F57C00'],
                data: [40, 20]
              }
            ]
          };
          return data;
        },
        options(){
          const options = {
            responsive: true,
            maintainAspectRatio: false
          };
          return options;
        }
    },
  methods: {
    volver(){
      this.$router.go(-1);
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

.container { 
    margin-top: 2%;
}

</style>