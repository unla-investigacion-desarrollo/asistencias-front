<template>
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="eventoSeleccionado"
            :items="eventos"
            :item-props="itemProps"
            label="Evento"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
           <v-select
            v-model="model.actividad"
            :items="actividades"
            :item-props="itemProps"
            label="Actividad"
            v-if="this.eventoSeleccionado"
            required
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import { OBTENER_ACTIVIDADES_X_EVENTO, OBTENER_EVENTOS } from '../store/actions-types';
export default {
  name: 'ComboComponent',
  components: { },
  data() {
    return {
      model: this.$store.getters.getAsistencia(),
      eventoSeleccionado: null,
      formValid: false
    };
  },
  computed: {
    eventos() {
      if(this.eventoSeleccionado){
        this.obtenerActividades();
      }
      return this.$store.getters.getEventos();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
  },
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
  },
  methods: {
    itemProps (item) {
        return {
          title: item.nombre,
        }
      },
    obtenerActividades() {
      this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.eventoSeleccionado);
    },

    }
  }

</script>

<style scoped>
</style>