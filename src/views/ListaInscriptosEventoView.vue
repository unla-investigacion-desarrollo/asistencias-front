<template>
    <v-container>
        <v-row class="container">
            <v-col>
                <v-card
                    class="mx-auto title_section" :elevation="8"
                >
                    <template v-slot:title>
                    <div class="title_content">
                        <span class="title">Lista de Inscriptos por Evento</span>
                    </div>
                    </template>

                    <v-card-text class="bg-surface-light pt-4" :elevation="8">
                        <div>
                            <ListaInscriptosEvento></ListaInscriptosEvento>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ListaInscriptosEvento from '@/components/ListaInscriptosEvento.vue';

export default {
    name: 'ListaInscriptosEventoView',
    components: { ListaInscriptosEvento },
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
.container {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}

@media screen and (max-width: 600px) {
.container{
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
}
}
</style>