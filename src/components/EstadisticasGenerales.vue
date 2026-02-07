<template>
  <v-container>
    <v-row>
      <v-col class="grafico">
        <Bar :data="datoIns" :options="opciones" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="grafico">
        <Bar :data="datos" :options="opciones" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="grafico">
        <Bar :data="datosAus" :options="opciones" />
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
  name: 'EstadisticasGenerales',
  components: { Bar },
  data() {
    return {
      etiquetas: [],
      etiquetasIns: [],
      etiquetasAus: [],
      asistencias: [],
      inscripciones: [],
      ausencias: [],
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
    datosAus(){
      const info = this.$store.getters.getEstadisticas();
      if(info.length > 0){

        info.map((dato) => {
            this.etiquetasAus.push(dato.evento.nombre);
            this.ausencias.push(dato.ausencias);
        }
        )
      }
        return {
          labels: this.etiquetas,
          datasets: [
          {
            label: 'Ausencias',
            backgroundColor: ['#F44336'],
            data: this.ausencias
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
    if(this.$store.getters.getEstadisticas().length == 0){
      this.$store.dispatch(OBTENER_ESTADISTICAS);
    }
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
.grafico {
  height: 300px;
}
</style>