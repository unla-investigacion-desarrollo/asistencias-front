<template>
    <v-form v-model="formValid">
      <v-container>
      <v-row>
          <v-col>
            <v-text-field
              v-model="model.titulo"
              :counter="45"
              label="Titulo"
              :rules="validationText"
              required
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
            <v-textarea label="Descripción" v-model="model.descripcion"></v-textarea>
          </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="evento"
            :items="eventos"
            label="Evento"
            :rules="validationText"
            required
        ></v-autocomplete>
        </v-col>
      </v-row>    
        <div class="container_button">
        <div class="content_button">
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
      </div>
    </v-container>
    </v-form>
</template>
  
<script>
import { EDITAR_CONTENIDO, OBTENER_EVENTOS } from '../store/actions-types';
export default {
  name: 'FormularioEditarContenido',
  components: { },
  data() {
    return {
      model: this.$store.getters.getContenido(),
      color: "#8e2736",
      evento: this.$store.getters.getContenido().evento.nombre,
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
      formValid: false
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventosFormateados();
    }
  },
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
      console.log(this.$store.getters.getEventosFormateados());
  },
  methods: {
    itemProps (item) {
        return {
          title: item.evento,
        }
      },
    continuar() {
      let lista = this.$store.getters.getEventos();
      let e = {};
      for(let i = 0; i < lista.length; i++){
        if(this.evento == lista[i].nombre){
          e = lista[i];
        }  
      }
      let contenido = {
        ... this.model,
        evento: e
      };
      console.log(contenido);

      console.log("edite el contenido");
      this.$store.dispatch(EDITAR_CONTENIDO, contenido);
    },
    volver(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
.button {
  margin-right: 2%;
}
</style>