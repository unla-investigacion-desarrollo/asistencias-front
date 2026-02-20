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
            v-model="model.audio"
            :counter="255"
            label="Link del Audio"
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
import { ACTUALIZAR_AUDIO, OBTENER_AUDIO_PUBLICO, TRAER_CONTENIDOS } from '@/store/actions-types';

export default {
  name: 'FormularioEditarAudio',
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
      let audio = {
        ...this.model,
        contenido: c
      }
      console.log("Edito el audio: " + JSON.stringify(audio));     
      this.$store.dispatch(ACTUALIZAR_AUDIO, audio);
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
      return this.$store.getters.getAudio();
    },
  },
  created() {
    this.$store.dispatch(TRAER_CONTENIDOS);
    if(this.model.audio == ''){
      const id = this.$route.params.id;
      console.log(id);
      this.$store.dispatch(OBTENER_AUDIO_PUBLICO, id);
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>