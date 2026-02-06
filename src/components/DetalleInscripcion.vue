<template>
    <v-container v-if="model.idInscripcion !== ''">
        <v-list dense class="rounded-lg mx-auto">
          <v-list-item>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Evento</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.evento.nombre }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Descripción</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.evento.descripcion }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Fecha de Inicio</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ formatearFecha(model.evento.fechaInicio) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Fecha de Fin</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ formatearFecha(model.evento.fechaFin) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Edificio</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.evento.edificio }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Ubicación</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.evento.ubicacion }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Estado</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.evento.estado}}
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
    </v-container>
  <div class="text_menssage" v-if="model.idInscripcion === ''">
      <h3>Ocurrió un problema al obtener la información, por favor intente acceder nuevamente desde el listado.</h3>
  </div>
  <div class="container_button">
    <v-btn
      class="me-4"
      color="primary"
      @click="volver"
    >
    Volver
    </v-btn>
  </div>
</template>
<script>
import { OBTENER_INSCRIPCION } from '@/store/actions-types';

export default {
  name: 'DetalleEvento',
  components: {},
  data() {
    return {
    };
  },
  computed: {
    model() {
      return this.$store.getters.getInscripcion();
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
  mounted() {
      if(this.$store.getters.getInscripcion().idInscripcion == ""){
          const id = this.$route.params.id;
          console.log(id);
          this.$store.dispatch(OBTENER_INSCRIPCION, id);
      }
  }
}
</script>
<style scoped>
.text_menssage{
    text-align: center;
    margin: 2%;
}
.container_button{
  text-align: center;
}
</style>