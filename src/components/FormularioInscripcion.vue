<template>
  <v-container>
    <v-form v-model="formValid">
      <v-row>
        <v-col>
          <v-select
            v-model="model.evento"
            :items="eventos"
            :item-props="itemProps"
            label="Evento"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-alert v-if="actividades.length > 0" text="Cuando te inscribas en el evento, te anotaremos en todas las actividades para que no te pierdas nada." type="info" variant="tonal"></v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-table v-if="actividades.length > 0"
            height="auto"
            fixed-header
            >
            <thead>
              <tr>
                <th class="text-center">
                  Actividades
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in actividades" :key="i.id">
                <td>{{  i.nombre }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <div class="text_menssage" v-if="actividades.length == 0 && this.busco">
        <Mensaje-component valor="sin-actividades"></Mensaje-component>
      </div>
      <div class="container_button">
        <v-btn
          class="me-4"
          color="primary"
          @click="continuar"
        >
        Enviar
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
import MensajeComponent from './MensajeComponent.vue';
import { OBTENER_EVENTOS, AGREGAR_INSCRIPCION, OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
export default {
  name: 'FormularioInscripcion',
  components: { MensajeComponent },
  data() {
    return {
      model: this.$store.getters.getInscripcion(),
      busco: false
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventos();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
    evento(){
      return this.model.evento;
    },
    validarCampo(valor){
        return valor.trim() != "";
    },
  },
  methods: {
    continuar() {
      this.model.actividades = this.actividades;
      console.log("Estado de las actividades antes de llamar " + JSON.stringify(this.model.actividades));
      if(this.model.actividades == 0){
        this.$router.push({
          name: "ErroresView",
          params: {
            mensaje: "error-servidor",
          },
        });
      } else {
        let usuario = null;
        if(this.$store.getters.getUsuario().nombre != ""){
          usuario = this.$store.getters.getUsuario();
        } else {
          usuario = JSON.parse(localStorage.getItem("usuario"));
        }

      let payload = {
        ...this.model,
        usuario: usuario
      };
      console.log("Este es el modelo " + JSON.stringify(this.model));
      console.log("me inscribi");

      this.$store.dispatch(AGREGAR_INSCRIPCION, payload);
    }
    },
    itemProps (item) {
        return {
          title: item.nombre,
        }
      },
    volver(){
      this.$router.go(-1);
    }
  },
  watch: {
      evento(nuevo, viejo) {
        if(nuevo != viejo){
          this.busco = true;
          this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.model.evento);
        }
      },
    },
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
      if(this.model.evento.nombre != ''){
        this.busco = true;
        this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.model.evento);
      }
      console.log(this.$store.getters.getEventos());
  }
}
</script>

<style scoped>
.container_button{
  margin-top: 5%;
  text-align: center;
}
</style>