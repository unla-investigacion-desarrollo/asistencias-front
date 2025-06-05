<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <div>
                    <ListaEventosGeneral></ListaEventosGeneral>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaEventosGeneral from '../components/ListaEventoGeneral.vue';

export default {
    name: 'ListaEventosGeneralView',
    components: { ListaEventosGeneral },
    methods: {}
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
.button_title {
    text-align: end;
    margin-bottom: 1%;
}
</style>