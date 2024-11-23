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
    <div class="text_menssage" v-if="model.nombre === ''">
        <h3>Ocurrió un problema al obtener la información, por favor intente acceder nuevamente desde el listado.</h3>
    </div>
   
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
.text_menssage{
    text-align: center;
    margin: 2%;
}
</style>