<template>
    <v-container>
      <v-row v-if="inscriptos.length > 0">
        <v-col>
          <v-table
            height="auto"
            fixed-header
            class="rounded-lg mx-auto"
          >
            <thead>
              <tr>
                <th class="text-left">
                  Nombre
                </th>
                <th class="text-left">
                  Apellido
                </th>
                <th class="text-left">
                  DNI
                </th>
                <th class="text-left">
                  Email
                </th>
                <th class="text-left">
                  Evento
                </th>
                <th class="text-left">
                  Actividades Inscriptas
                </th>
                <th class="text-left">
                  Fecha de Inscripción
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in inscriptos"
                :key="item.idUsuario"
              >
                <td>{{ item.usuario.nombre }}</td>
                <td>{{ item.usuario.apellido }}</td>
                <td>{{ item.usuario.dni }}</td>
                <td>{{ item.usuario.email }}</td>
                <td>{{ item.evento.nombre }}</td>
                <td>{{ item.asistencia.totalActividades }}</td>
                <td>{{ formatearFecha(item.fechaInscripcion) }}</td>
                
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <div class="text_menssage" v-if="inscriptos.length == 0">
        <Mensaje-component valor="sin-inscriptos"></Mensaje-component>
      </div>
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
import { OBTENER_INSCRIPTOS_X_EVENTO } from '@/store/actions-types';
import MensajeComponent from './MensajeComponent.vue';

export default {
  name: 'ListaInscriptosEvento',
  components: { MensajeComponent },
  data() {
    return {};
  },
  computed: {
    inscriptos(){
      return this.$store.getters.getInscriptosEvento();
    },
  },
  methods: {
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
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
    this.$store.dispatch(OBTENER_INSCRIPTOS_X_EVENTO, id);
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
.text_menssage{
  text-align: center;
  margin: 2%;
}
</style>