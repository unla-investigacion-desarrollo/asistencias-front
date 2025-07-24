<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Modificar Contenido</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioEditarContenido></FormularioEditarContenido>
            </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>
import FormularioEditarContenido from '@/components/FormularioEditarContenido.vue';

export default {
  name: 'EditarContenidoView',
  components: { FormularioEditarContenido },
}
</script>
  
<style scoped>
.title_section { background-color: #383854; }

.title {
    color: #fff;
}
.title_content{
  text-align: center;
}
</style>