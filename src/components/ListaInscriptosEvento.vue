<template>
    <v-container>
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