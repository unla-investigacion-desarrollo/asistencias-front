<template>
    <div class="container">
        <div class="content">
            <v-card
                class="mx-auto title_section" :elevation="8"
            >
                <template v-slot:title>
                <div class="title_content">
                    <span class="title">Agregar Tipo de Usuario</span>
                </div>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                    <FormularioTipoUsuario></FormularioTipoUsuario>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script>
import FormularioTipoUsuario from '../components/FormularioTipoUsuario.vue';

export default {
    name: 'TipoUsuarioView',
    components: { FormularioTipoUsuario },
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

.container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 5% 0px 0px 0px;
}

.content {
  grid-column: 3/5;
  grid-row: 1;
}

@media screen and (max-width: 750px) {
.container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 5% 5% 0px 5%;
}
.content{
  grid-column: 1/5;
  grid-row: 1;
}
}
</style>