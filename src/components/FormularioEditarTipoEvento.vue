<template>
  <v-form v-model="formValid">
    <v-text-field
      v-model="model.nombre"
      :counter="45"
      label="Tipo de Evento"
      :rules="validationText"
      required
    ></v-text-field>

    <div class="descripcion">
          <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
        </div>

    <div class="container_button">
      <v-btn
        class="me-4"
        color="primary"
        @click="continuar"
        :disabled="!formValid"
      >
      Modificar
      </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { ACTUALIZAR_TIPO_EVENTO } from '../store/actions-types';
export default {
  name: 'FormularioEditarTipoEvento',
  components: { },
  data() {
    return {
      model: this.$store.getters.getTipoEvento(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false
    };
  },
  methods: {
    continuar() {
        console.log(this.model);
        console.log("modifique el tipo de evento");
      this.$store.dispatch(ACTUALIZAR_TIPO_EVENTO, this.model);
    },
    
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>