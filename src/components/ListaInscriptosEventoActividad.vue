<template>
    <v-container>
      <v-row>
        <v-col :cols="12" :md="6">
           <v-select
            v-model="this.actividad"
            :items="actividades"
            :item-props="itemProps"
            label="Actividad"
            required
          ></v-select>
        </v-col>
        <v-col :cols="12" :md="1">
          <v-btn color="primary" @click="buscar" icon="mdi-magnify"></v-btn>     
        </v-col> 
      </v-row>
      <v-row v-if="inscriptos.usuarios.length > 0">
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
                  Actividad
                </th>
                <th class="text-left">
                  Fecha de Inscripcion
                </th>
                <th class="text-left">
                  Asistencia a Actividad
                </th>
                <th class="text-left">
                  Asistencia a Evento
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in inscriptos.usuarios"
                :key="item.idUsuario"
              >
                <td>{{ item.usuario.nombre }}</td>
                <td>{{ item.usuario.apellido }}</td>
                <td>{{ item.usuario.dni }}</td>
                <td>{{ item.usuario.email }}</td>
                <td>{{ item.evento.nombre }}</td>
                <td>{{ item.actividad.nombre }}</td>
                <td>{{ formatearFecha(item.inscripcion.fechaInscripcion) }}</td>
                <td>{{ valorAsistencia(item.asistenciaActividad.asistencia) }}</td>
                <td>{{ valorAsistencia(item.inscripcion.asistenciaGeneral) }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <div class="text_menssage" v-if="inscriptos.usuarios.length == 0">
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
import { OBTENER_INSCRIPTOS_X_EVENTOS_Y_ACTIVIDAD, OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';

export default {
  name: 'ListaInscriptosEvento',
  components: { MensajeComponent },
  data() {
    return {
      actividad: ""
    };
  },
  computed: {
    inscriptos(){
      return this.$store.getters.getInscriptosEventoActividad();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
    evento(){
      return this.$store.getters.getEvento();
    }
  },
  methods: {
    volver(){
      this.$router.go(-1);
    },
    valorAsistencia(item){
      return item == false ? "NO" : "SI"; 
    },
    buscar(){
      this.$store.dispatch(OBTENER_INSCRIPTOS_X_EVENTOS_Y_ACTIVIDAD, this.actividad);
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
    itemProps (item) {
      return {
        title: item.nombre,
      }
    }
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
    let datos = {
      idEvento: id
    }
    this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, datos);
  },
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