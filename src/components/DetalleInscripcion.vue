<template>
    <v-container v-if="model.evento.nombre !== ''">
        <v-row>
            <v-col>
            <h3>Evento: {{ model.evento.nombre }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Descripción: {{ model.evento.descripcion }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Fecha de Inicio: {{ model.evento.fechaInicio }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Fecha de Fin: {{ model.evento.fechaFin }}</h3> 
            </v-col>
        </v-row>  
        <v-row>
            <v-col>
            <h3>Edificio: {{ model.evento.edificio }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Ubicación: {{ model.evento.ubicacion }} </h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Estado: {{ model.evento.estado }} </h3> 
            </v-col>
        </v-row>

        <v-row>
            <v-col>

                <qr-code :valueUrl="valueUrl" :size="size" :level="level"></qr-code>

            
            </v-col>
            
        </v-row>
      
    </v-container>
    <div class="text_menssage" v-if="model.evento.nombre === ''">
        <h3>Ocurrió un problema al obtener la información, por favor intente acceder nuevamente desde el listado.</h3>
    </div>
   
</template>
<script>
import QrCode from "@/components/QrCode";
export default {
  name: 'DetalleEvento',
  components: { QrCode },
  data() {
    return {
      model: this.$store.getters.getInscripcion(),
      valueUrl:
        "https://www.unla.edu.ar/",
      size: 250,
      level: "H",
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