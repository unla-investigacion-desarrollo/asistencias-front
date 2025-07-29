<template>
  <v-container class="rol">
    <v-row class="d-flex align-center justify-center" no-gutters>
      <v-col :cols="12" :md="4">
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
            <div class="title_content">
                <span class="title">Agregar Tipo de Usuario</span>
            </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioTipoUsuario></FormularioTipoUsuario>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FormularioTipoUsuario from '@/components/FormularioTipoUsuario.vue';

export default {
    name: 'TipoUsuarioView',
    components: { FormularioTipoUsuario },
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
.rol{
  margin-top: 2%;
}
</style>