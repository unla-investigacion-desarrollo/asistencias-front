<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="contenido"
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
            v-model="model.video"
            :counter="255"
            label="Link del Video"
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
import { AGREGAR_VIDEO, TRAER_CONTENIDOS } from '@/store/actions-types';

export default {
  name: 'FormularioVideo',
  components: { },
  data() {
    return {
      model: this.$store.getters.getVideo(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false,
      contenido: this.$store.getters.getContenido().titulo
    };
  },
  computed: {
    contenidos() {
      return this.$store.getters.getContenidosFormateados();
    }
  },
  methods: {
    continuar() {
      console.log(this.model);
      let lista = this.$store.getters.getContenidos();
      let c = {};
      for(let i = 0; i < lista.length; i++){
        if(this.contenido == lista[i].titulo){
          c = lista[i];
        }  
      }
      let video = {
        ...this.model,
        contenido: c
      }
      console.log("Agrego el video: " + JSON.stringify(video)); 
      this.$store.dispatch(AGREGAR_VIDEO, video);
    },
    volver(){
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.dispatch(TRAER_CONTENIDOS);
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>