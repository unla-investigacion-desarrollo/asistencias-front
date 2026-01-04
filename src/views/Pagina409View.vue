<template>
    <v-row class="contenido">
      <v-col class="error">
         <v-icon
          class="mb-6"
          color="warning"
          icon="mdi-alert-outline"
          size="150"
        ></v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <h1>Encontramos un problema al inscribirte</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="error">
        <h2>Ya cuentas con una inscripcion para el evento solicitado.</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="texto">
        <h3>Podes revisar todas tus inscripciones en tu perfil.</h3>
      </v-col>
    </v-row>
    <v-row class="error">
      <v-col>
        <v-btn color="primary" @click="$router.push('/misInscripciones')">Mis Inscripciones</v-btn> 
      </v-col>
    </v-row>
    <v-row class="boton">
      <v-col>
        <v-btn color="primary" @click="$router.go(-1)">Volver</v-btn> 
      </v-col>
    </v-row>
</template>
<script>

export default {
  name: 'Pagina409View',
  components: { },
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
.texto {
  text-align: center;
}
</style>