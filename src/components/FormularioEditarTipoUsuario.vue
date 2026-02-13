<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.rol"
            :counter="45"
            label="Rol"
            :rules="validationText"
            required
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
import { ACTUALIZAR_ROL, OBTENER_TIPO_USUARIO } from '../store/actions-types';
export default {
  name: 'FormularioEditarTipoUsuario',
  components: { },
  data() {
    return {
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false
    };
  },
  methods: {
    continuar() {
      console.log(this.model);
      console.log("modifique el tipo de usuario");
      this.$store.dispatch(ACTUALIZAR_ROL, this.model);
    },
    volver(){
      this.$router.go(-1);
    }
  },
  computed: {
    model(){
      return this.$store.getters.getTipoUsuario();
    },
  },
  created() {
    if(this.model.rol == ''){
      const id = this.$route.params.id;
      console.log(id);
      this.$store.dispatch(OBTENER_TIPO_USUARIO, id);
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>