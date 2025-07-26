<template>
  <v-container class="container">
    <v-row>
      <v-col>
        <v-card
          class="mx-auto title_section" :elevation="8"
      >
          <template v-slot:title>
            <div class="title_content">
              <span class="title">Agregar Actividad</span>
            </div>
          </template>

          <v-card-text class="bg-surface-light pt-4">
              <FormularioActividad></FormularioActividad>
          </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import FormularioActividad from '../components/FormularioActividad.vue';
  
export default {
  name: 'ActividadView',
  components: { FormularioActividad },
}
</script>
  
<style scoped>
.title_section { background-color: #383854; }

.title {
    color: #fff;
}
.title_content{
  text-align: center;
}

.container {
  margin: 2% 5% 0px 5%;
}

@media screen and (max-width: 600px) {
.container{
  margin: 5% 5% 5% 5%;
}
}
</style>