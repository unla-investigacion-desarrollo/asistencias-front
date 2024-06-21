<template>
    <v-form>
    <v-text-field
      v-model="model.nombre"
      :counter="45"
      label="Nombre"
      :rules="validationText"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.apellido"
      :counter="45"
      label="Apellido"
      :rules="validationText"
      required
    ></v-text-field>

    <v-number-input
      controlVariant="default"
      label="DNI"
      :counter="8"
      v-model="model.dni"
      :rules="validationDNI"
    ></v-number-input>

    <v-text-field
      v-model="model.email"
      label="Email"
      :rules="validationEmail"
      required
    ></v-text-field>

    <v-select
      v-model="model.evento"
      :items="eventos"
      label="Evento"
      required
    ></v-select>

    <v-btn
      class="me-4"
      @click="continuar"
    >
      Enviar
    </v-btn>
  </v-form>
</template>
  
<script>
import { eventos } from "@/config/index";
import { VNumberInput } from 'vuetify/labs/VNumberInput';
export default {
  name: 'FormularioInscripcion',
  components: { VNumberInput },
  data() {
    return {
      model: this.$store.getters.getParticipante(),
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
    };
  },
  computed: {
    eventos() {
      return eventos;
    },
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
        console.log("me inscribi");
      //this.$store.dispatch(INSCRIPCION_EVENTO, this.model);
    },
    
  }
}
</script>

<style scoped>

</style>