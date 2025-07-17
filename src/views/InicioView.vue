<template>
  <v-container>       
    <v-row>
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
.lista{
  margin: 2% 10% 2% 10%;
}

</style>