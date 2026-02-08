<template>
  <v-container class="login">
     <v-row class="contenido" v-if="$route.params.mensaje == 'error-clave'">
      <v-col class="error">
         <v-icon
          class="mb-6"
          color="error"
          icon="mdi-alert-outline"
          size="150"
        ></v-icon>
      </v-col>
    </v-row>
    <v-row class="contenido" v-if="$route.params.mensaje == 'actualizo-clave'">
      <v-col class="error">
         <v-icon
          class="mb-6"
          color="success"
          icon="mdi-check-circle-outline"
          size="150"
        ></v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mensaje">
        <h2 v-html="mensaje"></h2>
      </v-col>
    </v-row>
    <v-row class="boton">
      <v-col>
        <v-btn color="primary" @click="$router.push('/')">Ir a Inicio</v-btn> 
      </v-col>
    </v-row>
    <v-row class="boton">
      <v-col>
        <v-btn color="primary" @click="$router.go(-1)">Volver</v-btn> 
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import mensajes from "@/config/mensajes";
export default {
  name: 'OlvideMiClaveMensajeView',
  components: { },
  computed: {
    mensaje() {
        return mensajes[this.$route.params.mensaje];
    }
}
}
</script>
  
<style scoped>
.title_section { background-color: #383854; text-align: center;}

.title {
    color: #fff;
}

.login{
  margin-top: 5%;
}

.mensaje {
  text-align: center;
  margin-bottom: 2%;
}

.contenido {
  text-align: center;
}

.boton {
  text-align: center;
}
</style>