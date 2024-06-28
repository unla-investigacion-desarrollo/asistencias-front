<template>
    <v-form>
    <v-text-field
      v-model="model.tipoEvento"
      :counter="45"
      label="Tipo de Evento"
      :rules="validationText"
      required
    ></v-text-field>

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
import { AGREGAR_TIPO_EVENTO } from '../store/actions-types';
export default {
  name: 'FormularioTipoEvento',
  components: { },
  data() {
    return {
      model: this.$store.getters.getTipoEvento(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
    };
  },
  methods: {
    continuar() {
        console.log(this.model);
        console.log("agregue el tipo de evento");
      this.$store.dispatch(AGREGAR_TIPO_EVENTO, this.model);
    },
    
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>