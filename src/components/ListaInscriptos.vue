<template>
    <v-container>
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
                  Fecha de Inicio
                </th>
                <th class="text-left">
                  Fecha de Fin
                </th>
                <th class="text-left">
                  Inscripciones
                </th>
                <th class="text-left">
                  Asistencias
                </th>
                <th class="text-left">
                  Detalle
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in inscriptos"
                :key="item.evento.idEvento"
              >
                <td>{{ item.evento.nombre }}</td>
                <td>{{ formatearFecha(item.evento.fechaInicio) }}</td>
                <td>{{ formatearFecha(item.evento.fechaFin) }}</td>
                <td>{{ item.inscripciones }}</td>
                <td>{{ item.asistencias }}</td>
                <td>
                  <v-btn class="remove_item" color="primary" @click="detalleItem(item.evento)" icon="mdi-note-search-outline"></v-btn>
                </td>
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
import { OBTENER_ESTADISTICAS, DETALLE_INSCRIPTOS_X_EVENTO } from '../store/actions-types';
export default {
  name: 'ListaInscriptos',
  components: {},
  data() {
    return {};
  },
  computed: {
    inscriptos(){
      return this.$store.getters.getEstadisticas();
    }
  },
  methods: {
    detalleItem(item){
        this.$store.dispatch(DETALLE_INSCRIPTOS_X_EVENTO, item);
    },
    volver(){
      this.$router.go(-1);
    },
    formatearFecha(f){
      let formato = "";
      if(f != null){
        let anio = f.substring(0, 4);
        let mes = f.substring(5, 7);
        let dia = f.substring(8, 10);
        let hora = f.substring(11, 13);
        let min = f.substring(14, 16);
        formato = dia + "-" + mes + "-" + anio + ", " +  hora + ":" + min;
      }
      return formato;
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