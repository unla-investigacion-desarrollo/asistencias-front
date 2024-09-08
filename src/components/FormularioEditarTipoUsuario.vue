<template>
    <v-form>
    <v-text-field
      v-model="model.rol"
      :counter="45"
      label="Rol"
      :rules="validationText"
      required
    ></v-text-field>
    <div class="container_button">
      <v-btn
        class="me-4"
        color="primary"
        @click="continuar"
      >
      Modificar
      </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { ACTUALIZAR_ROL } from '../store/actions-types';
export default {
  name: 'FormularioEditarTipoUsuario',
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
        console.log("modifique el tipo de usuario");
      this.$store.dispatch(ACTUALIZAR_ROL, this.model);
    },
    
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>