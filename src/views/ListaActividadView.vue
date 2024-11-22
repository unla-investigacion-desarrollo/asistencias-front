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
                <div class="button_title">
                    <v-btn color="primary" rounded="lg" @click="agregar">Agregar</v-btn>
                </div>
                <div>
                    <ListaActividad></ListaActividad>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaActividad from '../components/ListaActividad.vue';

export default {
    name: 'ListaActividadView',
    components: { ListaActividad },
    methods: {
        agregar(){
            this.$router.push('nuevaActividad')
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