<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto title_section" :elevation="8"
      >
          <template v-slot:title>
            <div class="title_content">
              <span class="title">Detalle de la Actividad</span>
            </div>
          </template>

          <v-card-text class="bg-surface-light pt-4">
              <DetalleActividad></DetalleActividad>
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
              <span class="title">Mapa de la Unla y Edificio de la actividad</span>
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
import DetalleActividad from '../components/DetalleActividad.vue';
import MapaComponent from '@/components/MapaComponent.vue';

export default {
  name: 'DetalleActividadView',
  components: { DetalleActividad, MapaComponent },
  data() {
    return {
    };
  },
  computed: {
    model() {
      return this.$store.getters.getActividad();
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
</style>