<template>
      <v-container>
        <v-row>
          <v-col>
            <Bar :data="datos" :options="opciones" />
          </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-table
            height="auto"
            fixed-header
            class="rounded-lg mx-auto"
          >
            <thead>
              <tr>
                <th class="text-left">
                  Evento
                </th>
                <th class="text-left">
                  Inscripciones
                </th>
                <th class="text-left">
                  Asistencias
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in estadisticas"
                :key="item.evento.idEvento"
              >
                <td>{{ item.evento.nombre }}</td>
                <td>{{ item.inscripciones }}</td>
                <td>{{ item.asistencias }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-row class="container_button">
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
    </v-container>
</template>
  
<script>
import { OBTENER_ESTADISTICAS } from '../store/actions-types';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
export default {
  name: 'RankingEventos',
  components: { Bar },
  data() {
    return {
      etiquetas: [],
      ranking: [],
      opciones: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    datos(){
      const info = this.$store.getters.getEstadisticas();
      if(info.length > 0){
        info.map((dato) => {
            this.etiquetas.push(dato.evento.nombre);
            this.ranking.push(this.calcularPorcentaje(dato));
        }
        )
      }
        return {
          labels: this.etiquetas,
          datasets: [
          {
            label: 'Procentaje de efectividad de Eventos',
            backgroundColor: ['#3F51B5'],
            data: this.ordenar()
          }
        ]
      } 
    },
    eventos() {
      return this.$store.getters.getEventosFormateados();
    },
    estadisticas(){
      return this.$store.getters.getEstadisticas();
    }
  },
  methods: {
    volver(){
      this.$router.go(-1);
    },
    calcularPorcentaje(dato){
      let porcentaje = 0;
      if(dato.asistencias > 0 && dato.inscripciones > 0){
        porcentaje = (dato.asistencias * 100)/(dato.inscripciones);
      }
      return porcentaje;
    },
    ordenar(){
      return this.ranking.sort(function(a, b){return b - a});
    }
  },
  created() {
    this.$store.dispatch(OBTENER_ESTADISTICAS);
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
.button {
  margin-right: 2%;
}
</style>