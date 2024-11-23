<template>
    <v-container>
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
            <h3>Cierre de Inscripción: {{ model.fechaCierre }} </h3> 
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
            <h3>Certificado: {{ model.linkCertificado }} </h3> 
            </v-col>
        </v-row>
    </v-container>
   
</template>
<script>
export default {
  name: 'DetalleEvento',
  components: {},
  data() {
    return {
      model: this.$store.getters.getEvento()
    };
  },
}
</script>
<style scoped>
</style>