<template>
  <v-container class="registro">
    <v-row class="d-flex align-center justify-center" no-gutters>
      <v-col :cols="12" :md="4">
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Registro</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioRegistro></FormularioRegistro>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import FormularioRegistro from '../components/FormularioRegistro.vue';

export default {
  name: 'RegistroView',
  components: { FormularioRegistro },
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

.registro{
  margin-top: 2%;
}
</style>