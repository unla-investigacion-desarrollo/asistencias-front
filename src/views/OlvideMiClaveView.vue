<template>
  <v-container class="login">
    <v-row class="d-flex align-center justify-center" no-gutters>
      <v-col :cols="12" :md="3" >
        <v-card
          class="mx-auto title_section" :elevation="8"
      >
          <template v-slot:title>
          <span class="title">Olvide Mi Clave</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
              <OlvideMiClave></OlvideMiClave>
          </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import OlvideMiClave from '../components/OlvideMiClave.vue';

  
export default {
  name: 'OlvideMiClaveView',
  components: { OlvideMiClave },
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
</style>