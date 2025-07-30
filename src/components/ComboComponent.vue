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
            required
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import { OBTENER_EVENTOS } from '../store/actions-types';
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
      }

    }
  }

</script>

<style scoped>
</style>