<template>
    <v-container>
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Inscripción a Eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioInscripcion></FormularioInscripcion>
            </v-card-text>
        </v-card>

    </v-container>
  </template>
  
  <script>
import FormularioInscripcion from '../components/FormularioInscripcion.vue';

  
  export default {
    name: 'InscripcionView',
    components: { FormularioInscripcion },
  }
</script>
  
<style scoped>
.title_section { background-color: #455A64; }

.title {
    color: #fff;
}
.title_content{
  text-align: center;
}
</style>