<template>
  <v-container class="inscripcion">
    <v-row class="d-flex align-center justify-center" no-gutters>
      <v-col :cols="12" :md="4">
        <v-card
            class="mx-auto title_section" :elevation="8"
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
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import FormularioInscripcion from '@/components/FormularioInscripcion.vue';

export default {
  name: 'InscripcionView',
  components: { FormularioInscripcion },
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
.inscripcion {
  margin-top: 2%;
}
</style>