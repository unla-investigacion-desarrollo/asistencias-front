  <template>
    <v-container>
      <v-row>
        <v-col>
          <v-card
              class="mx-auto title_section" :elevation="8"
          >
              <template v-slot:title>
                <div class="title_content">
                  <span class="title">Detalle de la Inscripción</span>
                </div>
              </template>

              <v-card-text class="bg-surface-light pt-4">
                  <DetalleInscripcion></DetalleInscripcion>
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
                    <ListaActividadInscripcion></ListaActividadInscripcion>
                </div>
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
                <span class="title">Invitación</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4 title_content">
                <qr-code :valueUrl="valueUrl" :size="size" :level="level"></qr-code>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="this.model.evento.edificio != ''">
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
              <MapaComponent :edificio="this.model.evento.edificio"></MapaComponent>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </template>
  <script>
import DetalleInscripcion from '../components/DetalleInscripcion.vue';
import QrCode from "@/components/QrCode";
import MapaComponent from '@/components/MapaComponent.vue';
import ListaActividadInscripcion from '@/components/ListaActividadInscripcion.vue'
  
export default {
  name: 'DetalleInscripcionView',
  components: { DetalleInscripcion, QrCode, MapaComponent, ListaActividadInscripcion },
  data() {
    return {
      model: this.$store.getters.getInscripcion(),
      valueUrl:
        "https://www.unla.edu.ar/",
      size: 250,
      level: "H",
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