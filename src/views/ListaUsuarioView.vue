<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Usuarios</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <ListaUsuarios></ListaUsuarios>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaUsuarios from '../components/ListaUsuarios.vue';

export default {
    name: 'ListaUsuarioView',
    components: { ListaUsuarios },
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