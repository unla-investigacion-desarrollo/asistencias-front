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
      <v-btn
        class="me-4"
        color="primary"
        @click="volver"
      >
      Volver
      </v-btn>
    </div>
  </v-form>
</template>
  
<script>
import { seleccionActividades } from "@/config/index";
import MensajeComponent from './MensajeComponent.vue';
import { OBTENER_EVENTOS, ACTUALIZAR_INSCRIPCION, OBTENER_ACTIVIDADES_X_EVENTO, INSCRIPCION_EDITADA, OBTENER_INSCRIPCION } from '../store/actions-types';
export default {
  name: 'FormularioEditarInscripcion',
  components: { MensajeComponent },
  data() {
    return {
      listaActividad: this.$store.getters.getListaActividades()
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
    },
    model(){
      return this.$store.getters.getInscripcion();
    },
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
      console.log("Estado de las actividades antes de llamar " + JSON.stringify(this.model.actividades));
      if(this.model.actividades == 0){
        this.$router.push({
          name: "ErroresView",
          params: {
            mensaje: "error-servidor",
          },
        });
      } else {
      let payload = {
        ...this.model
      };
      console.log("Este es el modelo " + JSON.stringify(this.model));
      console.log("ACTUALIZO INSCRIPCION");

      this.$store.dispatch(ACTUALIZAR_INSCRIPCION, payload);
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
  created() {
    this.$store.dispatch(OBTENER_EVENTOS);
    this.$store.dispatch(INSCRIPCION_EDITADA);
    console.log(this.$store.getters.getEventos());
    if(this.model.idInscripcion == ''){
      const id = this.$route.params.id;
      console.log(id);
      this.$store.dispatch(OBTENER_INSCRIPCION, id);
    }
  }
}
</script>

<style scoped>
.container_button{
  margin-top: 5%;
  text-align: center;
}
</style>