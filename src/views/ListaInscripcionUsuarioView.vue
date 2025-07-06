<template>
  <v-container>
    <v-row class="contenedor">
      <v-col>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Inscripciones</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <ListaInscripcion></ListaInscripcion>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import ListaInscripcion from '../components/ListaInscripcion.vue';

  
  export default {
    name: 'ListaInscripcionUsuarioView',
    components: { ListaInscripcion },
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
  margin-left: 5%;
  margin-right: 5%;
}

@media screen and (max-width: 600px) {
.contenedor {
  margin-left: 3%;
  margin-right: 3%;
}
}
</style>