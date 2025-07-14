<template>

    <v-form v-model="formValid">
      <div class="container">
        <div class="nombre">
          <v-text-field
            v-model="model.nombre"
            :counter="45"
            label="Nombre"
            :rules="validationText"
            required
          ></v-text-field>
        </div>
        <div class="descripcion">
          <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
        </div>

        <div class="inicio">
          <v-text-field
            v-model="model.fechaInicio"
            label="Fecha de inicio"
            :rules="validationText"
            type="datetime-local" 
            required
          ></v-text-field>
        </div>
        <div class="fin">
          <v-text-field
            v-model="model.fechaFin"
            label="Fecha de fin"
            type="datetime-local" 
          ></v-text-field>
        </div>
        <div class="edificio">
          <v-autocomplete
            v-model="model.edificio"
            :items="edificios"
            label="Edificio"
            required
        ></v-autocomplete>
      </div>
      <div class="estado">
        <v-select v-if="estado"
          v-model="model.estado"
          :items="estados"
          label="Estado"
        ></v-select>
      </div>
      <div class="tevento">
        <v-select
          v-model="model.tipoEvento"
          :items="eventos"
          :item-props="itemProps"
          label="Tipo de evento"
          required
        ></v-select>
      </div>
      <div class="ubicacion">
          <v-text-field
            v-model="model.ubicacion"
            :counter="45"
            label="Ubicacion"
            :rules="validationText"
            required
          ></v-text-field>
        </div>
      <div class="certificado">
        <v-text-field
          v-model="model.linkCertificado"
          label="Link del certificado"
        ></v-text-field>
      </div>
      </div>
        <div class="container_button">
          <v-btn
            class="me-4"
            color="primary"
            @click="continuar"
            :disabled="!formValid"
          >
          Modificar
          </v-btn>
      </div>
    
    </v-form>
</template>
  
<script>
import { edificios } from "@/config/edificios";
import { estados } from "@/config/index";
import { MODIFICAR_EVENTO, OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
export default {
  name: 'FormularioEditarEvento',
  components: {},
  props: {
    estado: {
      type: Boolean,
      default: true
    },
    operacion: {
      type: String,
      default: "alta"
    }
  },
  data() {
    return {
      model: this.$store.getters.getEvento(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getTipoEventos();
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
      this.$store.dispatch(OBTENER_TIPOS_EVENTOS);
      console.log(this.$store.getters.getTipoEventos());
  },
  methods: {
    itemProps (item) {
        return {
          title: item.nombre,
        }
      },
    continuar() {
      console.log(this.model);
      console.log("modifique el evento");
        this.$store.dispatch(MODIFICAR_EVENTO, this.model);
    },
    
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
.container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 5% 5% 0px 5%;
  grid-gap: 2%;
}
.nombre{
  grid-column: 1/3;
  grid-row: 1;
}

.descripcion{
  grid-column: 1/5;
  grid-row: 2;
}

.inicio {
  grid-column: 1/3;
  grid-row: 3;
  margin-top: 12.5%;
}

.fin {
  grid-column: 3/5;
  grid-row: 3;
  margin-top: 12.5%;
}

.estado {
  grid-column: 3/5;
  grid-row: 4;
}

.edificio {
  grid-column: 1/3;
  grid-row: 4;
}

.tevento{
  grid-column: 3/5;
  grid-row: 1;
}

.ubicacion {
  grid-column: 1/5;
  grid-row: 5;
}

.certificado {
  grid-column: 1/5;
  grid-row: 6;
}
</style>