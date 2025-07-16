<template>
    <v-form>
    <v-select
      v-model="model.evento"
      :items="eventos"
      :item-props="itemProps"
      label="Evento"
      required
    ></v-select>
    <v-select
      v-model="model.seleccion"
      :items="seleccionActividades"
      label="Selección de Actividades"
    ></v-select>
      <v-table v-if="model.seleccion !== 'Todas' && actividades.length > 0"
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
          <td><v-checkbox v-model="listaActividad" :label="i.nombre" :value="i"></v-checkbox></td>
        </tr>
      </tbody>
    </v-table> 
    <div class="text_menssage" v-if="actividades.length == 0">
      <Mensaje-component valor="sin-actividades"></Mensaje-component>
    </div>

    <div class="container_button">
      <v-btn
        class="me-4"
        color="primary"
        @click="continuar"
        :disabled="validoBoton"
        v-if="actividades.length != 0"
      >
      Enviar
      </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { seleccionActividades } from "@/config/index";
import MensajeComponent from './MensajeComponent.vue';
import { OBTENER_EVENTOS, REGISTRAR_PARTICIPANTE_EVENTO, OBTENER_ACTIVIDADES_X_EVENTO } from '../store/actions-types';
export default {
  name: 'FormularioInscripcion',
  components: { MensajeComponent },
  data() {
    return {
      model: this.$store.getters.getInscripcion(),
      listaActividad: []
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventos();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
    seleccionActividades(){
      console.log("Este es el evento:" + this.model.evento.idEvento);
      this.$store.dispatch(OBTENER_ACTIVIDADES_X_EVENTO, this.model.evento);
      return seleccionActividades;
    },
    validarCampo(valor){
        return valor.trim() != "";
    },
    validoBoton(){
      let valido = false;
      if(this.model.seleccion != 'Todas' && this.listaActividad.length == 0){
        valido = true;
      }
      return valido;
    }
  },
  methods: {
    continuar() {
      console.log("La lista esta compuesta por: " + JSON.stringify(this.listaActividad));
      if(this.model.seleccion == 'Todas'){
        console.log("Estas son todas las actividades: " + JSON.stringify(this.actividades));
        console.log("Estas son las actividades del modelo: " + JSON.stringify(this.model.actividades) );
        this.model.actividades = this.actividades;
      } else{
        if(this.listaActividad.length > 0){
          this.model.actividades = this.listaActividad;
        }
      }
      
      if(this.model.actividades == 0){
        this.$router.push({
          name: "ErroresView",
          params: {
            mensaje: "error-servidor",
          },
        });
      } else if (this.model.actividades > 0) {

      let payload = {
        ...this.model,
        usuario: this.$store.getters.getUsuario()
      }
      console.log("Este es el modelo " + JSON.stringify(this.model));
      console.log("me inscribi");

      this.$store.dispatch(REGISTRAR_PARTICIPANTE_EVENTO, payload);
    }
    },
    itemProps (item) {
        return {
          title: item.nombre,
        }
      },

  },
  created() {
      this.$store.dispatch(OBTENER_EVENTOS);
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