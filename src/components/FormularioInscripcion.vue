<template>
    <v-form>
    <v-select
      v-model="model.evento"
      :items="eventos"
      :item-props="itemProps"
      label="Evento"
      required
    ></v-select>
    <v-select
      v-model="model.seleccion"
      :items="seleccionActividades"
      label="Selección de Actividades"
    ></v-select>
    <v-data-table v-if="model.evento.idEvento !== undefined"
      v-model="model.actividades"
      :items="actividades"
      item-value="nombre"
      show-select
    ></v-data-table>
    <div class="container_button">
      <v-btn
        class="me-4"
        color="primary"
        @click="continuar"
      >
      Enviar
      </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { seleccionActividades } from "@/config/index";
import { OBTENER_EVENTOS, REGISTRAR_PARTICIPANTE_EVENTO, OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
export default {
  name: 'FormularioInscripcion',
  components: {},
  data() {
    return {
      model: this.$store.getters.getInscripcion(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      validationEmail: [
        v => !!v || 'El campo es requerido',
        v => (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v)) || 'El email no es valido',
        ],
      validationDNI: [
        v => !!v || 'El campo es requerido'
        ],
      listaActividad: []
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventos();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
    seleccionActividades(){
      console.log("Este es el evento:" + this.model.evento.idEvento);
      this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.model.evento);
      return seleccionActividades;
    },
    validarCampo(valor){
        return valor.trim() != "";
    }
  },
  methods: {
    continuar() {
      console.log(this.model);
      console.log("me inscribi");
      this.$store.dispatch(REGISTRAR_PARTICIPANTE_EVENTO, this.model);
    },
    itemProps (item) {
        return {
          title: item.nombre,
        }
      },

  },
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
      console.log(this.$store.getters.getEventos());
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>