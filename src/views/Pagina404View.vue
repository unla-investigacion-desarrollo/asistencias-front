<template>
    <v-row class="contenido">
      <v-col class="error">
        <h1 class="error404">404</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <h3 >Página no encontrada</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <h4>¡Ups! Parece que este evento es un misterio.</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <p class="texto">No pudimos encontrar la página que estás buscando.</p>
        <p class="texto">Es posible que el evento que buscas finalizo, fue cancelado o la dirección URL sea incorrecta.</p>
      </v-col>
    </v-row>
    <v-row class="error">
      <v-col>
        <v-btn color="primary" @click="$router.push('/')">Ir a Inicio</v-btn> 
      </v-col>
    </v-row>
</template>
<script>

export default {
  name: 'Pagina404View',
  components: { },
}
</script>
<style scoped>
.error {
  text-align: center;
}
.error404 {
  font-size: 150px;
}
.contenido {
  margin-top: 5%;
}
.texto {
  color: azure;
}
</style>