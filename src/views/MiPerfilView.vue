<template>

    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
        <v-tab value="info">Mi Perfil</v-tab>
        <v-tab value="inscripciones">Mis Inscripciones</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="info">
            <DetalleUsuarioView></DetalleUsuarioView>
        </v-tabs-window-item>

        <v-tabs-window-item value="inscripciones">
            <ListaInscripcionUsuarioView></ListaInscripcionUsuarioView>
        </v-tabs-window-item>

      </v-tabs-window>

</template>
<script>
import DetalleUsuarioView from './DetalleUsuarioView.vue';
import ListaInscripcionUsuarioView from './ListaInscripcionUsuarioView.vue';

export default {
    name: 'MiPerfilView',
    components: { DetalleUsuarioView, ListaInscripcionUsuarioView },
    data: () => ({
      tab: null,
    }),
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