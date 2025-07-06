<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Roles</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <div class="button_title">
                    <v-btn color="primary" rounded="lg" @click="agregar">Agregar</v-btn>
                </div>
                <div>
                    <ListaTipoUsuario></ListaTipoUsuario>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaTipoUsuario from '../components/ListaTipoUsuario.vue';

export default {
    name: 'ListaRolesView',
    components: { ListaTipoUsuario },
    methods: {
        agregar(){
            this.$router.push('/nuevoRol')
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