<template>
    <v-container>
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
            <span class="title">Inscripción a Eventos</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioEvento></FormularioEvento>
            </v-card-text>
        </v-card>

    </v-container>
  </template>
  
  <script>
import FormularioEvento from '../components/FormularioEvento.vue';

  
  export default {
    name: 'EventoView',
    components: { FormularioEvento },
  }
</script>
  
<style scoped>
.title_section { background-color: #455A64; }

.title {
    color: #fff;
}
</style>