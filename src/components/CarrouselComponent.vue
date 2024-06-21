<template>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
  
<script>
export default {
name: 'CarrouselComponent',
data () {
      return {
        items: [
          {
            src: 'https://www.ruess.com.ar/sites/www.ruess.com.ar/files/styles/detalle_noticia/public/imagenes/30ff0d69a53a07c6ff16b16c481d5b83_xl2.png?itok=ZmDwGpff',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
}
</script>

<style scoped>

</style>