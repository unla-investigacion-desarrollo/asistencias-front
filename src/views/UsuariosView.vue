<template>

    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
        <v-tab value="usuarios">Usuarios</v-tab>
        <v-tab value="roles">Roles</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="usuarios">
            <ListaUsuarioView></ListaUsuarioView>
        </v-tabs-window-item>

        <v-tabs-window-item value="roles">
            <ListaRolesView></ListaRolesView>
        </v-tabs-window-item>

      </v-tabs-window>

</template>
<script>
import ListaRolesView from './ListaRolesView.vue';
import ListaUsuarioView from './ListaUsuarioView.vue';



export default {
    name: 'UsuariosView',
    components: { ListaUsuarioView, ListaRolesView },
    data: () => ({
      tab: null,
    }),
    mounted() {
      const solapa = this.$route.params.solapa;
      console.log(solapa);
      this.tab = solapa;
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
</style>