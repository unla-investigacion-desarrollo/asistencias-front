<template>
  <v-form v-model="formValid">
    <v-text-field
      v-model="model.nombre"
      :counter="45"
      maxlength="45"
      label="Nombre"
      :rules="validationText"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.apellido"
      :counter="45"
      label="Apellido"
      maxlength="45"
      :rules="validationText"
      required
    ></v-text-field>

    <v-number-input
      controlVariant="default"
      label="DNI"
      :counter="8"
      :max="99999999"
      v-model="model.dni"
      :rules="validationDNI"
    ></v-number-input>

    <v-text-field
      v-model="model.email"
      label="Email"
      :rules="validationEmail"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.usuario"
      :counter="45"
      maxlength="45"
      label="Usuario"
      :rules="validationText"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.clave"
      :counter="45"
      maxlength="45"
      label="Contraseña"
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
    </div>
  </v-form>
</template>
  
<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { REGISTRAR_USUARIO } from '../store/actions-types';
import { participante } from "@/config/mock"
export default {
  name: 'FormularioRegistroGeneral',
  components: { VNumberInput },
  data() {
    return {
      model: this.$store.getters.getUsuario(),
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
      formValid: false
    };
  },
  computed: {
    valiteText(value){
        let respuesta;
        if (!(/[^0-9]/.test(value)))
        respuesta = 'El campo no debe contener numeros';

        if(value.trim() !== "")
        respuesta = 'El campo es requerido';

        if(value.lenght < 2)
        respuesta = 'El campo debe contener al menos 2 digitos';
        return respuesta;
    },
    validarEmail(){
        return /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(this.model.email);
    },
    validarCampo(valor){
        return valor.trim() != "";
    }
  },
  methods: {
    continuar() {
      console.log(this.model);
      this.model.tipoUsuario = participante;
      console.log("me registre");
      this.$store.dispatch(REGISTRAR_USUARIO, this.model);
    },
  },
  created() {
  },
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>