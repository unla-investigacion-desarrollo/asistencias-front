<template>
    <v-form>
    
    <v-text-field
      v-model="model.email"
      label="Email"
      :rules="validationEmail"
      maxlength="45"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.password"
      :counter="45"
      label="Contraseña"
      :rules="validationText"
      maxlength="45"
      required
    ></v-text-field>

    <div class="button_container">
      <v-btn
      @click="continuar"
      color="primary"
    >
      Iniciar sesión
      </v-btn>
      <v-btn
      @click="registro"
      color="primary"
      class="registro"
    >
      Registrarse
      </v-btn>
    </div>
    
  </v-form>
</template>
  
<script>
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
      //this.$store.dispatch(LOGIN, this.model);
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

.registro{
  margin-left: 5%;
}
</style>