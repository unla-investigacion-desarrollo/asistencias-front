<template>
  <v-container>
    <v-row class="container">
      <v-col>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Detalle del Evento</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <DetalleEvento></DetalleEvento>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="this.model.edificio != ''">
      <v-col>
        <v-card
          class="mx-auto title_section" :elevation="8"
      >
          <template v-slot:title>
            <div class="title_content">
              <span class="title">Mapa de la Unla y Edificio del evento</span>
            </div>
          </template>

          <v-card-text class="bg-surface-light pt-4">
              <MapaComponent :edificio="this.model.edificio"></MapaComponent>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import DetalleEvento from '@/components/DetalleEvento.vue';
import MapaComponent from '@/components/MapaComponent.vue';

export default {
  name: 'DetalleEventoView',
  components: { DetalleEvento, MapaComponent },
  data() {
    return {};
  },
  computed: {
    model() {
      return this.$store.getters.getEvento();
    }
  },
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
  margin-top: 2%;
}

@media screen and (max-width: 600px) {
.container{
  margin-top: 5%;
}
}
</style>