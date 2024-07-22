<template>

    <v-form>
      <div class="container">
        <div class="titulo">
          <v-text-field
            v-model="model.titulo"
            :counter="45"
            label="Titulo"
            :rules="validationText"
            required
          ></v-text-field>
        </div>
        <div class="descripcion">
          <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
        </div>
        <div class="audio">
            <FormularioAudio></FormularioAudio>
        </div>
        <div class="boton_audio">
            <v-btn icon="mdi-plus" size="large"></v-btn>
        </div>
        <div class="imagen">
            <FormularioImagen></FormularioImagen>
        </div>
        <div class="boton_imagen">
            <v-btn icon="mdi-plus" size="large"></v-btn>
        </div>
        <div class="video">
            <FormularioVideo></FormularioVideo>
        </div>
        <div class="boton_video">
            <v-btn icon="mdi-plus" size="large"></v-btn>
        </div>
      </div>
        <div class="container_button">
          <v-btn
            class="me-4"
            :color="color"
            @click="continuar"
          >
          Guardar
          </v-btn>
      </div>
    
    </v-form>
</template>
  
<script>
import FormularioAudio from '@/components/FormularioAudio.vue';
import FormularioImagen from '@/components/FormularioImagen.vue';
import FormularioVideo from '@/components/FormularioVideo.vue';
import { AGREGAR_CONTENIDO, OBTENER_TIPOS_EVENTOS } from '../store/actions-types';
export default {
  name: 'FormularioContenido',
  components: { FormularioAudio, FormularioImagen, FormularioVideo },
  props: {
    estado: {
      type: Boolean,
      default: true
    },
    operacion: {
      type: String,
      default: "alta"
    }
  },
  data() {
    return {
      model: this.$store.getters.getContenido(),
      color: "#8e2736",
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getTipoEventos();
    }
  },
  created() {
      this.$store.dispatch(OBTENER_TIPOS_EVENTOS);
      console.log(this.$store.getters.getTipoEventos());
  },
  methods: {
    itemProps (item) {
        return {
          title: item.tipoEvento,
        }
      },
    continuar() {
      console.log(this.model);
      console.log("agregue el contenido");
      this.$store.dispatch(AGREGAR_CONTENIDO, this.model);
    },
    
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
.titulo{
  grid-column: 1/5;
  grid-row: 1;
}

.descripcion{
  grid-column: 1/5;
  grid-row: 2;
}

.audio {
  grid-column: 1/4;
  grid-row: 4;
}

.boton_audio {
  grid-column: 4/5;
  grid-row: 4;
}


.imagen {
  grid-column: 1/4;
  grid-row: 5;
}

.boton_imagen {
  grid-column: 4/5;
  grid-row: 5; 
}

.video {
  grid-column: 1/4;
  grid-row: 6;
}

.boton_video {
  grid-column: 4/5;
  grid-row: 6; 
}

</style>