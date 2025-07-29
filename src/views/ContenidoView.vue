<template>
  <v-container>
    <v-row class="container">
      <v-col>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Agregar Contenido</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioContenido></FormularioContenido>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import FormularioContenido from '@/components/FormularioContenido.vue';
export default {
  name: 'ContenidoView',
  components: { FormularioContenido },
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
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
}

@media screen and (max-width: 600px) {
.container{
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
}
}
</style>