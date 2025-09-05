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
                <div class="button_title">
                    <v-btn color="primary" rounded="lg" @click="agregar">Agregar</v-btn>
                </div>
                <div>
                    <ListaEvento></ListaEvento>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import { EVENTO_NUEVO } from '@/store/actions-types';
import ListaEvento from '../components/ListaEvento.vue';

export default {
    name: 'ListaEventosView',
    components: { ListaEvento },
    methods: {
        agregar(){
            this.$store.dispatch(EVENTO_NUEVO);
        }
    }
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