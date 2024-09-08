<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Roles</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <ListaTipoUsuario></ListaTipoUsuario>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaTipoUsuario from '../components/ListaTipoUsuario.vue';

export default {
    name: 'ListaRolesView',
    components: { ListaTipoUsuario },
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