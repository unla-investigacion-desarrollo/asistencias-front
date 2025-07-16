<template>
    <v-container v-if="model.nombre !== ''">
        <v-row>
            <v-col>
            <h3>Actividad: {{ model.nombre }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Evento: {{ model.evento.nombre }}</h3> 
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
            <h3>Cupo: {{ model.cupo }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Cupo Limite: {{ model.cupoLimite }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col class="titulo">
                <h2>Mapa de la Unla y Edificio del evento</h2> 
            </v-col>
        </v-row>
        <v-row>
            <v-col class="titulo">
                <img :src="imagen" alt="" srcset="" width="100%">
            </v-col>
        </v-row>  
    </v-container>
    <div class="text_menssage" v-if="model.nombre === ''">
        <h3>Ocurrió un problema al obtener la información, por favor intente acceder nuevamente desde el listado.</h3>
    </div>
   
</template>
<script>
export default {
  name: 'DetalleActividad',
  components: {},
  data() {
    return {
      model: this.$store.getters.getActividad()
    };
  },
  computed: {
    imagen(){
        return `/${this.model.edificio}.png`;
    }
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