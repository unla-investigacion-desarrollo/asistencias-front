<template>
    <v-row class="contenido">
      <v-col class="error">
         <v-icon
          class="mb-6"
          color="error"
          icon="mdi-alert-outline"
          size="150"
        ></v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <h1>Error en los datos ingresados</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <h2 v-html="error"></h2>
      </v-col>
    </v-row>
    <v-row class="error">
      <v-col>
        <v-btn color="primary" @click="$router.push('/')">Ir a Inicio</v-btn> 
      </v-col>
    </v-row>
    <v-row class="boton">
      <v-col>
        <v-btn color="primary" @click="$router.go(-1)">Volver</v-btn> 
      </v-col>
    </v-row>
</template>
<script>
import errores from "@/config/errores";

export default {
  name: 'PaginaErrorLoginView',
  components: { },
  computed: {
    error() {
        return errores[this.$route.params.error];
    }
}
}
</script>
<style scoped>
.error {
  text-align: center;
  margin-top: 2%;
}
.contenido {
  margin-top: 5%;
}
.boton {
  text-align: center;
}
</style>