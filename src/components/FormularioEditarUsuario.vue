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
          v-model="model.tipoUsuario"
          :items="roles"
          :item-props="itemProps"
          label="Rol"
          required
        ></v-select>

    <v-text-field
      v-model="model.usuario"
      :counter="45"
      maxlength="45"
      label="Usuario"
      :rules="validationText"
      required
    ></v-text-field>

    <v-text-field
      v-model="model.clave"
      :counter="45"
      maxlength="45"
      label="Contraseña"
      :rules="validationText"
      required
    ></v-text-field>

    <div class="container_button">
      <v-btn
        class="me-4"
        color="primary"
        @click="continuar"
      >
      Modificar
      </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { ACTUALIZAR_USUARIO, OBTENER_ROLES } from '../store/actions-types';
export default {
  name: 'FormularioEditarUsuario',
  components: { VNumberInput },
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
      validationDNI: [
        v => !!v || 'El campo es requerido'
        ],
    };
  },
  computed: {
    roles() {
      return this.$store.getters.getRoles();
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
    itemProps (item) {
        return {
          title: item.rol,
        }
      },
    continuar() {
        console.log(this.model);
        console.log("modifique el usuario");
      this.$store.dispatch(ACTUALIZAR_USUARIO, this.model);
    },
  },
  created() {
      this.$store.dispatch(OBTENER_ROLES);
      console.log(this.$store.getters.getRoles());
  },
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>