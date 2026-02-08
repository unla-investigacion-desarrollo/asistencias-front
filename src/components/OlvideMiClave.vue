<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-text-field
            v-model="email"
            label="Email"
            :rules="validationEmail"
            maxlength="45"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-number-input
            controlVariant="default"
            label="DNI"
            :counter="8"
            :max="99999999"
            v-model="dni"
            :rules="validationDNI"
          ></v-number-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="clave"
            :counter="45"
            label="Contraseña"
            :rules="validationText"
            maxlength="45"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="confirmoClave"
            :counter="45"
            label="Confirmar Contraseña"
            :rules="validationText"
            maxlength="45"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="distintas">
        <v-col>
          <v-alert
            closable
            icon="$error"
            title="Las claves ingresadas no coinciden."
            text=""
            type="error"
            variant="outlined"
          ></v-alert>
        </v-col>
      </v-row>
      <v-row class="button_container">
        <v-col>
          <v-btn
            @click="continuar"
            color="primary"
            :disabled="!formValid"
          >
            Confirmar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
  
<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { CAMBIO_MI_CLAVE } from '../store/actions-types';
export default {
  name: 'LoginComponent',
  components: { VNumberInput },
  data() {
    return {
      color: "#79415A",
      email: "",
      dni: "",
      clave: "",
      confirmoClave: "",
      distintas: false,
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
  methods: {
    continuar() {
      if(this.clave !== this.confirmoClave){
        this.distintas = true;
      } else {
        this.distintas = false;
        let datos = {
          email: this.email,
          dni: this.dni,
          clave: this.clave
        }
        this.$store.dispatch(CAMBIO_MI_CLAVE, datos);
      }
    },
  }
}
</script>

<style scoped>
.button_container{
  text-align: center;
}

</style>