<template>
  <v-container>
    <v-row class="container">
      <v-col>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Agregar Evento</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioEvento></FormularioEvento>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import FormularioEvento from '../components/FormularioEvento.vue';

export default {
  name: 'EventoView',
  components: { FormularioEvento },
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