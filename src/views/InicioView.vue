<template>
  <v-container>
    <div class="carrousel_content">
        <CarrouselComponent></CarrouselComponent>
    </div>
  </v-container>
</template>

<script>
import CarrouselComponent from '../components/CarrouselComponent.vue'

export default {
  name: 'InicioView',
  components: { CarrouselComponent },
}
</script>

<style scoped>
.carrousel {

}

</style>