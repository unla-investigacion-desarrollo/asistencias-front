<template>
  <v-container>       
   
          <CarrouselComponent></CarrouselComponent>

        
    </v-container>
  </template>

<script>
import CarrouselComponent from '../components/CarrouselComponent.vue';

export default {
  name: 'InicioView',
  components: { CarrouselComponent },
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