<template>
    <v-container>
      <v-row class="contenedor">
        <v-col>
           <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Perfil</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <DetalleUsuario></DetalleUsuario>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import DetalleUsuario from '../components/DetalleUsuario.vue';

  
  export default {
    name: 'DetalleUsuarioView',
    components: { DetalleUsuario },
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

.contenedor {
  margin-left: 20%;
  margin-right: 20%;
}


@media screen and (max-width: 600px) {
.contenedor {
  margin-left: 5%;
  margin-right: 5%;
}
}
</style>