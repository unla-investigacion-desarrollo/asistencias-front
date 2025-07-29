<template>
  <v-form v-model="formValid">
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
        :disabled="!formValid"
      >
      Enviar
      </v-btn>
      <v-btn
          class="me-4"
          color="primary"
          @click="volver"
        >
        Volver
        </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { AGREGAR_TIPO_USUARIO } from '../store/actions-types';
export default {
  name: 'FormularioTipoUsuario',
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
        console.log("agregue el rol para un usuario");
      this.$store.dispatch(AGREGAR_TIPO_USUARIO, this.model);
    },
    volver(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>