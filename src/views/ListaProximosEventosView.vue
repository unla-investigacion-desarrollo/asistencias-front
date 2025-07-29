<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Próximos Eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <div>
                    <ListaProximosEventos></ListaProximosEventos>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaProximosEventos from '../components/ListaProximosEventos.vue';

export default {
    name: 'ListaProximosEventosView',
    components: { ListaProximosEventos },
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