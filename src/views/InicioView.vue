<template>
  <v-container>       
   
          <CategoriaEventosComponent></CategoriaEventosComponent>

        
    </v-container>
  </template>

<script>
import CategoriaEventosComponent from '../components/CategoriaEventosComponent.vue';

export default {
  name: 'InicioView',
  components: { CategoriaEventosComponent },
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

</style>