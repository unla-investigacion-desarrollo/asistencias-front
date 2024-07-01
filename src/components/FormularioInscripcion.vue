<template>
    <v-form>
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

    <v-select
      v-model="modelE"
      :items="eventos"
      :item-props="itemProps"
      label="Evento"
      required
    ></v-select>

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
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { OBTENER_EVENTOS, REGISTRAR_PARTICIPANTE_EVENTO } from '../store/actions-types';
export default {
  name: 'FormularioInscripcion',
  components: { VNumberInput },
  data() {
    return {
      model: this.$store.getters.getParticipante(),
      modelE: this.$store.getters.getEvento(),
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
      return this.$store.getters.getEventos();
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
        let inscripcion = {
          e: this.modelE,
          p: this.model
        }
        console.log(inscripcion);
      this.$store.dispatch(REGISTRAR_PARTICIPANTE_EVENTO, inscripcion);
    },
    itemProps (item) {
        return {
          title: item.nombre,
        }
      }
  },
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
      console.log(this.$store.getters.getEventos());
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>