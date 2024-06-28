<template>
    <v-container>
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Agregar nuevo Tipo de Evento</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <FormularioTipoEvento></FormularioTipoEvento>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import FormularioTipoEvento from '../components/FormularioTipoEvento.vue';

export default {
    name: 'TipoEventoView',
    components: { FormularioTipoEvento },
}
</script>

<style scoped>
.title_section { background-color: #455A64; }

.title {
    color: #fff;
}
.title_content{
  text-align: center;
}
</style>