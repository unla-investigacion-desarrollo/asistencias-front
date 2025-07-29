<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.imagen"
            :counter="45"
            label="Link de la Imagen"
            :rules="validationText"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="container_button">
        <v-btn
          class="me-4"
          color="primary"
          @click="continuar"
          :disabled="!formValid"
        >
        Modificar
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
  </v-container>
</template>
  
<script>
import { ACTUALIZAR_IMAGEN } from '@/store/actions-types';

export default {
  name: 'FormularioImagen',
  components: { },
  data() {
    return {
      model: this.$store.getters.getImagen(),
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
      console.log("Edito la imagen");     
      this.$store.dispatch(ACTUALIZAR_IMAGEN, this.model);
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