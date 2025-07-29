<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Actividades</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <div>
                    <ListaActividadGeneral></ListaActividadGeneral>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaActividadGeneral from '../components/ListaActividadGeneral.vue';

export default {
    name: 'ListaActividadGeneralView',
    components: { ListaActividadGeneral },
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