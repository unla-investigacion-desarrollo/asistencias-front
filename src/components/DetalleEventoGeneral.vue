<template>
    <v-container v-if="model.nombre !== ''">
        <v-list dense class="rounded-lg mx-auto">
          <v-list-item>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Evento</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.nombre }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Descripción</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.descripcion }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Fecha de Inicio</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ formatearFecha(model.fechaInicio) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Fecha de Fin</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ formatearFecha(model.fechaFin) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Cierre de Inscripción</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ formatearFecha(model.fechaCierre) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Edificio</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.edificio }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Ubicación</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.ubicacion }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Estado</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.estado }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Categoria</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.tipoEvento.nombre }}
              </v-col>
            </v-row>
          </v-list-item>
        </v-list> 
    </v-container>
    <div class="text_menssage" v-if="model.nombre === ''">
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
import { OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
export default {
  name: 'DetalleEventoGeneral',
  components: {},
  data() {
    return {
      model: this.$store.getters.getEvento()
    };
  },
  computed: {
    evento() {
      return this.$store.getters.getEvento();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
  },
  methods: {
    formatearFecha(f){
      let formato = "";
      if(f != null){
        let anio = f.substring(0, 4);
        let mes = f.substring(5, 7);
        let dia = f.substring(8, 10);
        let hora = f.substring(11, 13);
        let min = f.substring(14, 16);
        formato = dia + "-" + mes + "-" + anio + " a las " +  hora + ":" + min;
      }
      return formato;
    },
    volver(){
      this.$router.go(-1);
    }
},
    created(){
        if(this.model.nombre !== ''){
            this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.model);
        }
    }
}
</script>
<style scoped>
.text_menssage{
    text-align: center;
    margin: 2%;
}
.titulo {
    text-align: center;
    margin: 2%;
}
.container_button{
  text-align: center;
}
</style>