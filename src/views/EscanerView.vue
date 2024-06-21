<template>
    <v-container>        
        <EscanerComponent></EscanerComponent>
    </v-container>
  </template>
  
  <script>
import EscanerComponent from '../components/EscanerComponent.vue';

  
export default {
    name: 'EscanerView',
    components: { EscanerComponent },
  }
</script>
  
<style scoped>
.title_section { background-color: #455A64; }

.title {
    color: #fff;
}
</style>