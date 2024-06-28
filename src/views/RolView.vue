<template>
    <v-container>
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Agregar nuevo Rol</span>
              </div>
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
.title_content{
  text-align: center;
}
</style>