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
            <h3>Fecha de Inicio: {{ model.fechaInicio }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Fecha de Fin: {{ model.fechaFin }}</h3> 
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
}
</script>
<style scoped>
.text_menssage{
    text-align: center;
    margin: 2%;
}
</style>