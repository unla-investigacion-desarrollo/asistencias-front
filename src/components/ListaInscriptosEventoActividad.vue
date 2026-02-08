<template>
    <v-container>
      <v-row>
        <v-col :cols="12" :md="4">
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
      <v-row v-if="inscriptos.listaUsuarios.length > 0">
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
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in inscriptos.listaUsuarios"
                :key="item.idUsuario"
              >
                <td>{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.dni }}</td>
                <td>{{ item.email }}</td>
                <td>{{ this.inscriptos.evento.nombre }}</td>
                <td>{{ this.inscriptos.actividad.nombre }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <div class="text_menssage" v-if="inscriptos.listaUsuarios.length == 0">
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
import { DETALLE_INSCRIPTOS_X_EVENTO_ACTIVIDAD, OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
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
    buscar(){
      this.$store.dispatch(DETALLE_INSCRIPTOS_X_EVENTO_ACTIVIDAD, this.actividad);
    },
    itemProps (item) {
      return {
        title: item.nombre,
      }
    }
  },
  created() {
      this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.evento);
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