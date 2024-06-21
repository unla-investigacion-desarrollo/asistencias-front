<template>
  <div class="carrousel_container">
      <div class="carrousel_mi"></div>
      <div class="carrousel"><CarrouselComponent></CarrouselComponent></div>
      <div class="carrousel_md"></div>
  </div>
</template>

<script>
import CarrouselComponent from '../components/CarrouselComponent.vue'

export default {
  name: 'InicioView',
  components: { CarrouselComponent },
}
</script>

<style scoped>
.carrousel_container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 2% 0px 2% 0px;
}

.carrousel_mi {
  grid-column: 1;
}

.carrousel {
  grid-column: 2/6;
}

.carrousel_md {
  grid-column: 7;
}

</style>