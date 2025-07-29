<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.nombre"
            :counter="45"
            label="Tipo de Evento"
            :rules="validationText"
            required
        ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
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