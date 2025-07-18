<template>
    <v-container v-if="model.nombre !== ''">
        <v-row>
            <v-col>
                <h3>Evento: {{ model.nombre }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Descripción: {{ model.descripcion }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Fecha de Inicio: {{ formatearFecha(model.fechaInicio) }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Fecha de Fin: {{ formatearFecha(model.fechaFin) }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Cierre de Inscripción: {{ formatearFecha(model.fechaCierre) }} </h3> 
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <h3>Edificio: {{ model.edificio }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Ubicación: {{ model.ubicacion }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Estado: {{ model.estado }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Tipo de Evento: {{ model.tipoEvento.nombre }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            
            </v-col>
        </v-row>
    </v-container>
    <div class="text_menssage" v-if="model.nombre === ''">
        <h3>Ocurrió un problema al obtener la información, por favor intente acceder nuevamente desde el listado.</h3>
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
    imagen(){
        return `/${this.model.edificio}.png`;
    },
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
        formato = dia + "-" + mes + "-" + anio + ", " +  hora + ":" + min;
      }
      return formato;
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
</style>