<template>
    <v-container>
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
            <span class="title">Agregar nuevo Rol</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioPerfil></FormularioPerfil>
            </v-card-text>
        </v-card>

    </v-container>
  </template>
  
  <script>
import FormularioPerfil from '../components/FormularioPerfil.vue';

  
export default {
    name: 'RolView',
    components: { FormularioPerfil },
  }
</script>
  
<style scoped>
.title_section { background-color: #455A64; }

.title {
    color: #fff;
}
</style>