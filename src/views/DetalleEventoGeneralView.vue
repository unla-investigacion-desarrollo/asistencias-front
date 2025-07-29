<template>
  <v-container>
    <v-row>
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
              <DetalleEventoGeneral></DetalleEventoGeneral>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Actividades</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <div>
                    <ListaActividadGeneral></ListaActividadGeneral>
                </div>
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
import DetalleEventoGeneral from '@/components/DetalleEventoGeneral.vue';
import MapaComponent from '@/components/MapaComponent.vue';
import ListaActividadGeneral from '@/components/ListaActividadGeneral.vue'

export default {
  name: 'DetalleEventoGeneralView',
  components: { DetalleEventoGeneral, MapaComponent, ListaActividadGeneral },
  data() {
    return {
      model: this.$store.getters.getEvento()
    };
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