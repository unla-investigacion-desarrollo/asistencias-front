<template>
  <v-container>       
    <v-row class="categoria">
      <v-col>
        <CategoriaEventosComponent></CategoriaEventosComponent>
      </v-col>
    </v-row>
    <v-row class="lista">
      <v-col>
        <ListaProximosEventosView></ListaProximosEventosView>
      </v-col>
    </v-row>      

        
    </v-container>
  </template>

<script>
import CategoriaEventosComponent from '../components/CategoriaEventosComponent.vue';
import ListaProximosEventosView from './ListaProximosEventosView.vue'

export default {
  name: 'InicioView',
  components: { CategoriaEventosComponent, ListaProximosEventosView },
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

.categoria{
  margin: 5% 0% 5% 0%;
}

@media (max-width: 500px) {
.lista{
  margin: 2% 0% 2% 0%;
}
}

</style>