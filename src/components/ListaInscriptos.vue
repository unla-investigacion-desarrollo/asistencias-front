<template>
    <v-container>
      <v-row>
        <v-col class="boton">
          <v-btn color="primary" @click="exportarCSV">
            Exportar Datos
          </v-btn>
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
                  Ausencias
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
                <td>{{ item.ausencias }}</td>
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
        formato = dia + "-" + mes + "-" + anio + " " +  hora + ":" + min;
      }
      return formato;
    },
    exportarCSV() {
      const datos = this.inscriptos.map(item => ({
        Evento: item.evento.nombre,
        Inicio:  new Date(item.evento.fechaInicio)
                .toLocaleString('es-AR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })
                .replace(',', ''),
        Fin: new Date(item.evento.fechaFin)
                .toLocaleString('es-AR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })
                .replace(',', ''),
        Inscripciones: item.inscripciones,
        Asistencias: item.asistencias,
        Ausencias: item.ausencias
      }))

      const headers = Object.keys(datos[0]).join(',')
      const rows = datos.map(obj => Object.values(obj).join(','))

      const csvContent = [headers, ...rows].join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'reporte_eventos.csv')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
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
.boton{
  text-align: end;
}
</style>