<template>
      <v-container>
        <v-row>
          <v-col>
            <Bar :data="datoIns" :options="opciones" />
          </v-col>
          <v-col>
            <Bar :data="datos" :options="opciones" />
          </v-col>
      </v-row>
     
      <div class="container_button">
        <v-btn
          class="me-4"
          color="primary"
          @click="volver"
        >
        Volver
        </v-btn>
      </div>
    </v-container>
</template>
  
<script>
import { OBTENER_ESTADISTICAS } from '../store/actions-types';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
export default {
  name: 'EstadisticasGenerales',
  components: { Bar },
  data() {
    return {
      etiquetas: [],
      etiquetasIns: [],
      asistencias: [],
      inscripciones: [],
      evento: "",
      encontrado: false,
      opciones: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    datoIns(){
      const info = this.$store.getters.getEstadisticas();
      if(info.length > 0){
        info.map((dato) => {
            this.etiquetasIns.push(dato.evento.nombre);
            this.inscripciones.push(dato.inscripciones);
        }
        )
      }
        return {
          labels: this.etiquetasIns,
          datasets: [
          {
            label: 'Inscripciones',
            backgroundColor: ['#673AB7'],
            data: this.inscripciones
          }
        ]
      } 
    },
    datos(){
      const info = this.$store.getters.getEstadisticas();
      if(info.length > 0){
        info.map((dato) => {
            this.etiquetas.push(dato.evento.nombre);
            this.asistencias.push(dato.asistencias);
        }
        )
      }
        return {
          labels: this.etiquetas,
          datasets: [
          {
            label: 'Asistencias',
            backgroundColor: ['#3F51B5'],
            data: this.asistencias
          }
        ]
      } 
    },
    eventos() {
      return this.$store.getters.getEventosFormateados();
    }
  },
  methods: {
    volver(){
      this.$router.go(-1);
    },
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