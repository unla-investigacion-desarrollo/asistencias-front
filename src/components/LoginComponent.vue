<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.email"
            label="Email"
            :rules="validationEmail"
            maxlength="45"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.clave"
            :counter="45"
            label="Contraseña"
            :rules="validationText"
            maxlength="45"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="button_container">
        <v-col>
          <v-btn
            @click="continuar"
            color="primary"
          >
            Iniciar sesión
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            @click="registro"
            color="primary"
          >
            Registrarse
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
  
<script>
import { LOGIN } from '../store/actions-types';
export default {
  name: 'LoginComponent',
  components: {},
  data() {
    return {
      model: this.$store.getters.getUsuario(),
      color: "#79415A",
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      validationEmail: [
        v => !!v || 'El campo es requerido',
        v => (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v)) || 'El email no es valido',
        ],
    };
  },
  methods: {
    continuar() {
        console.log(this.model);
        console.log("me loguee");
      this.$store.dispatch(LOGIN, this.model);
    },
    registro(){
      this.$router.push('registro')
    }
  }
}
</script>

<style scoped>
.button_container{
  text-align: center;
}

</style>