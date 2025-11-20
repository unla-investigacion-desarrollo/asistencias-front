<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.nombre"
            :counter="45"
            label="Nombre"
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
      <v-row>
        <v-col :cols="12" :md="6">
          <v-text-field
            v-model="model.fechaInicio"
            label="Fecha de inicio"
            :rules="validationText"
            type="datetime-local" 
            required
          ></v-text-field>
        </v-col>
        <v-col :cols="12" :md="6">
          <v-text-field
            v-model="model.fechaFin"
            label="Fecha de fin"
            type="datetime-local" 
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="model.evento"
            :items="eventos"
            :item-props="itemProps"
            label="Evento"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12" :md="6">
          <v-autocomplete
            v-model="model.edificio"
            :items="edificios"
            label="Edificio"
            required
        ></v-autocomplete>
        </v-col>
        <v-col :cols="12" :md="6">
          <v-text-field
            v-model="model.ubicacion"
            :counter="45"
            label="Ubicacion"
            :rules="validationText"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12" :md="4">
          <v-select
            v-model="model.estado"
            :items="estados"
            label="Estado"
          ></v-select>
        </v-col>
        <v-col :cols="12" :md="4">
          <v-number-input
            controlVariant="default"
            label="Cupo"
            :counter="3"
            :max="999"
            v-model="model.cupo"
            :rules="validationNumber"
            ></v-number-input>
        </v-col>
        <v-col :cols="12" :md="4">
          <v-number-input
            controlVariant="default"
            label="Cupo Limite"
            :counter="3"
            :max="999"
            v-model="model.cupoMax"
            :rules="validationNumber"
            ></v-number-input>
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
import { edificios } from "@/config/edificios";
import { estados } from "@/config/index";
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { OBTENER_EVENTOS, ACTUALIZAR_ACTIVIDAD } from '../store/actions-types';
export default {
  name: 'FormularioEditarActividad',
  components: { VNumberInput },
  data() {
    return {
      model: this.$store.getters.getActividad(),
      color: "#8e2736",
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false,
      validationNumber: [
        v => !!v || 'El campo es requerido'
        ],
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventos();
    },
    edificios(){
        return edificios;
    },
    estados(){
      return estados;
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
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
      console.log(this.$store.getters.getEventos());
  },
  methods: {
    itemProps (item) {
        return {
          title: item.nombre,
        }
      },
    continuar() {
      console.log(this.model);
      console.log("actualice la actividad del evento");
      this.model.fechaFin = this.formatearfechas(this.model.fechaFin);
      this.model.fechaInicio = this.formatearfechas(this.model.fechaInicio);     
      this.$store.dispatch(ACTUALIZAR_ACTIVIDAD, this.model);
    },
    volver(){
      this.$router.go(-1);
    },
    formatearfechas(f){
      let formato = "";
      if(f != null){
        let anio = f.substring(0, 4);
        let mes = f.substring(5, 7);
        let dia = f.substring(8, 10);
        let hora = f.substring(11, 13);
        let min = f.substring(14, 16);
        formato = anio + "-" + mes + "-" + dia + " " +  hora + ":" + min;
      }
      return formato;
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>