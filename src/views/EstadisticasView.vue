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
                <v-row class="d-flex justify-center" >
                  <v-col :cols="12" :md="4">
                    <v-autocomplete
                      v-model="evento"
                      :items="eventos"
                      label="Evento"
                      :rules="validationText"
                      required
                    ></v-autocomplete>
                  </v-col>
                  <v-col :cols="12" :md="1">
                    <v-btn color="primary" @click="buscar" icon="mdi-magnify"></v-btn>
                    
                  </v-col>                   
                </v-row>
                <v-row v-if="evento && this.encontrado && this.valores.length > 0">
                  <v-col>
                    <Doughnut :data="datos" :options="opciones" />
                  </v-col>
                </v-row>
                <v-row  v-if="evento && this.encontrado && this.valores.length == 0">
                  <v-col>
                    <Mensaje-component valor="sin-estadisticas"></Mensaje-component>
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
import MensajeComponent from '@/components/MensajeComponent.vue';
import { OBTENER_ESTADISTICAS } from '@/store/actions-types';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
ChartJS.register(ArcElement, Tooltip, Legend);
  
export default {
  name: 'EstadisticasView',
  components: { Doughnut, MensajeComponent },
  data() {
    return {
      valores: [],
      evento: "",
      encontrado: false,
      opciones: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    datos(){
        return {
          labels: ['Inscripciones', 'Asistencias'],
          datasets: [
          {
            backgroundColor: ['#B71C1C', '#F57C00'],
            data: this.valores
          }
        ]
      } 
    },
    eventos() {
      return this.$store.getters.getEventosFormateados();
    }
  },
  watch: {
    evento(nuevo, viejo) {
      if(nuevo != viejo){
        this.encontrado = false;
      }
    },
  },
  methods: {
    volver(){
      this.$router.go(-1);
    },
    buscar(){
      const info = this.$store.getters.getEstadisticas();
      this.valores = [];
      if(info.length > 0){
        info.map((dato) => {
          if(dato.evento.nombre == this.evento){
            this.valores.push(dato.inscripciones);
            this.valores.push(dato.asistencias);
          }
          console.log("Dato del map:" +dato.evento.nombre);
          console.log("Dato seleccionado: "+ this.evento);
        }
        )
        this.encontrado = true;
      }
    }
  },
  created() {
    this.$store.dispatch(OBTENER_ESTADISTICAS);
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