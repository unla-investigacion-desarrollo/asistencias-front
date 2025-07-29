<template>
  <v-container class="rol">
    <v-row class="d-flex align-center justify-center" no-gutters>
      <v-col :cols="12" :md="4">
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
            <div class="title_content">
                <span class="title">Modificar Rol</span>
            </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioEditarTipoUsuario></FormularioEditarTipoUsuario>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FormularioEditarTipoUsuario from '@/components/FormularioEditarTipoUsuario.vue';

export default {
    name: 'EditarRolesView',
    components: { FormularioEditarTipoUsuario },
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