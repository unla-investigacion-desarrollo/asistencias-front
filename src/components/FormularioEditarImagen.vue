<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="model.titulo"
            :items="contenidos"
            label="Contenido"
            :rules="validationText"
            required
        ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="model.imagen"
            :counter="45"
            label="Link de la Imagen"
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
import { ACTUALIZAR_IMAGEN, OBTENER_IMAGEN_PUBLICA, TRAER_CONTENIDOS } from '@/store/actions-types';

export default {
  name: 'FormularioEditarImagen',
  components: { },
  data() {
    return {
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false,
    };
  },
  methods: {
    continuar() {
      console.log(this.model);   
      let lista = this.$store.getters.getContenidos();
      let c = {};
      for(let i = 0; i < lista.length; i++){
        if(this.model.titulo == lista[i].titulo){
          c = lista[i];
        }  
      }
      let imagen = {
        ...this.model,
        contenido: c
      }
      console.log("Edito la imagen: " + JSON.stringify(imagen)); 
      this.$store.dispatch(ACTUALIZAR_IMAGEN, imagen);
    },
    volver(){
      this.$router.go(-1);
    }
  },
  computed: {
    contenidos() {
      return this.$store.getters.getContenidosFormateados();
    },
    model(){
      return this.$store.getters.getImagen();
    },
  },
  created() {
    this.$store.dispatch(TRAER_CONTENIDOS);
    if(this.model.imagen == ''){
      const id = this.$route.params.id;
      console.log(id);
      this.$store.dispatch(OBTENER_IMAGEN_PUBLICA, id);
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>