<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Tipos de Eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <ListaTipoEvento></ListaTipoEvento>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaTipoEvento from '../components/ListaTipoEvento.vue';

export default {
    name: 'ListaTiposEventosView',
    components: { ListaTipoEvento },
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