<template>
    <v-form>
    
    <v-text-field
      v-model="model.email"
      label="Email"
      :rules="validationEmail"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.password"
      :counter="45"
      label="Contraseña"
      :rules="validationText"
      required
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="continuar"
      color="primary"
    >
      Enviar
    </v-btn>
  </v-form>
</template>
  
<script>
export default {
  name: 'LoginComponent',
  components: {},
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
    };
  },
  methods: {
    continuar() {
        console.log(this.model);
        console.log("me loguee");
      //this.$store.dispatch(INSCRIPCION_EVENTO, this.model);
    },
    
  }
}
</script>

<style scoped>

</style>