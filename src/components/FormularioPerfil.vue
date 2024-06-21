<template>
    <v-form>
    <v-text-field
      v-model="model.rol"
      :counter="45"
      label="Rol"
      :rules="validationText"
      required
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="continuar"
    >
      Enviar
    </v-btn>
  </v-form>
</template>
  
<script>
import { AGREGAR_TIPO_USUARIO } from '../store/actions-types';
export default {
  name: 'FormularioPerfil',
  components: { },
  data() {
    return {
      model: this.$store.getters.getTipoUsuario(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
    };
  },
  methods: {
    continuar() {
        console.log(this.model);
        console.log("agregue rol");
      this.$store.dispatch(AGREGAR_TIPO_USUARIO, this.model);
    },
    
  }
}
</script>

<style scoped>

</style>