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
      <v-row :cols="12" :md="6">
        <v-col>
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
        <v-col :cols="12" :md="6">
          <v-select
            v-model="model.tipoEvento"
            :items="eventos"
            :item-props="itemProps"
            label="Tipo de evento"
            required
          ></v-select>
        </v-col>
        <v-col :cols="12" :md="6">
          <v-select
            v-model="model.estado"
            :items="estados"
            label="Estado"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.linkCertificado"
            label="Link del certificado"
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
          Guardar
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
import { AGREGAR_EVENTO, OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
export default {
  name: 'FormularioEvento',
  components: {},
  data() {
    return {
      model: this.$store.getters.getEvento(),
      color: "#8e2736",
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
      console.log("agregue el evento");
      this.model.fechaFin = this.formatearfechas(this.model.fechaFin);
      this.model.fechaInicio = this.formatearfechas(this.model.fechaInicio);
      this.$store.dispatch(AGREGAR_EVENTO, this.model);
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
        formato = dia + "/" + mes + "/" + anio + " " +  hora + ":" + min;
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