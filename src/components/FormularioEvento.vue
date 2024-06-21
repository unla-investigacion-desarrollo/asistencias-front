<template>
    <v-form>
        <v-text-field
        v-model="model.nombre"
        :counter="45"
        label="Nombre"
        :rules="validationText"
        required
        ></v-text-field>
        
        <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>

        <v-text-field
        v-model="model.fechaInicio"
        label="Fecha de inicio"
        :rules="validationText"
        type="datetime-local" 
        required
        ></v-text-field>

        <v-text-field
        v-model="model.fechaFin"
        label="Fecha de fin"
        type="datetime-local" 
        ></v-text-field>

        <v-select
        v-model="model.ubicacion"
        :items="edificios"
        label="Ubicacion"
        required
        ></v-select>

        <v-select
        v-model="model.tipoEvento"
        :items="eventos"
        label="Tipo de evento"
        required
        ></v-select>

        <v-file-input
        label="Certificado del evento"
        v-model="model.archivo"
        show-size
    ></v-file-input>

        <v-btn
        class="me-4"
        color="primary"
        @click="continuar"
        >
        Enviar
        </v-btn>
    </v-form>
</template>
  
<script>
import { edificios } from "@/config/edificios";
import { eventos } from "@/config/index";

export default {
  name: 'FormularioEvento',
  components: {},
  data() {
    return {
      model: this.$store.getters.getEvento(),
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
    edificios(){
        return edificios;
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
        console.log("agregue el evento");
      //this.$store.dispatch(AGREGAR_EVENTO, this.model);
    },
    
  }
}
</script>

<style scoped>

</style>