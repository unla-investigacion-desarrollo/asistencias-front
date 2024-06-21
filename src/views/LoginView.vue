<template>
    <v-container>
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
            <span class="title">Iniciar Sesión</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <LoginComponent></LoginComponent>
            </v-card-text>
        </v-card>

    </v-container>
  </template>
  
  <script>
import LoginComponent from '../components/LoginComponent.vue';

  
  export default {
    name: 'InscripcionView',
    components: { LoginComponent },
  }
</script>
  
<style scoped>
.title_section { background-color: #455A64; }

.title {
    color: #fff;
}
</style>