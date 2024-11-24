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
      <v-table v-if="model.seleccion !== 'Todas'"
      height="auto"
      fixed-header
    >
      <thead>
        <tr>
          <th class="text-center">
            Actividades
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in actividades" :key="i.id">
          <td><v-checkbox v-model="listaActividad" :label="i.nombre" :value="i"></v-checkbox></td>
        </tr>
      </tbody>
    </v-table> 
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
      console.log(this.listaActividad)
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
  margin-top: 5%;
  text-align: center;
}
</style>