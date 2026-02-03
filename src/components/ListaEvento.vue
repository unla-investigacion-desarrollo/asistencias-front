<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El evento fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El evento fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El evento fue eliminado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="eventos.length > 0">
    <v-table
      height="auto"
      fixed-header
      class="rounded-lg mx-auto"
    >
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Descripción
          </th>
          <th class="text-left">
            Fecha Inicio
          </th>
          <th class="text-left">
            Fecha Fin
          </th>
          <th class="text-left">
            Cierre Inscripcion
          </th>
          <th class="text-left">
            Edificio
          </th>
          <th class="text-left">
            Ubicacion
          </th>
          <th class="text-left">
            Estado
          </th>
          <th class="text-left">
            Tipo de Evento
          </th>
          <th class="text-left">
            Certificado
          </th>
          
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in eventos"
          :key="item.idEvento"
        >
          <td>{{ item.idEvento }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ formatearFecha(item.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.fechaFin) }}</td>
          <td>{{ formatearFecha(item.fechaCierre) }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.tipoEvento.nombre }}</td>
          <td>{{ item.linkCertificado }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil" v-if="!this.validoPas"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete" v-if="!this.validoPas"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
              <v-btn class="remove_item" color="secondary" @click="inscripcionItem(item)" icon="mdi-note-plus-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="eventos.length == 0">
    <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este evento?"
        title="Eliminar Evento"
      >
        <template v-slot:actions>
          <v-btn
            text="SI"
            @click="eliminarItem() & (dialog = false)"
          ></v-btn>
          <v-btn
            text="NO"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
    
  </template>
<script setup>
  import { ref } from 'vue'
  const dialog = ref(false)
</script>
<script>
import { EDITAR_EVENTO, ELIMINAR_EVENTO, OBTENER_EVENTOS_PUBLICOS, DETALLE_EVENTO, FORMULARIO_INSCRIPCION_EVENTO, ACEPTA_ELIMINAR_EVENTO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';

export default {
  name: 'ListaEvento',
  components: { MensajeComponent },
  data(){
    return {};
  },
  computed: {
    eventos() {
        return this.$store.getters.getEventos();
    },
    elimino(){
      return this.$store.getters.getEliminoEvento();
    },
    agrego(){
      return this.$store.getters.getAgregoEvento();
    },
    edito(){
      return this.$store.getters.getEditoEvento();
    },
    validoPas(){
        return this.$store.getters.getPas();
    }
},
  methods: {
    editarItem(item){   
      this.$store.dispatch(EDITAR_EVENTO, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_EVENTO, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_EVENTO);
    },
    detalleItem(item){
        this.$store.dispatch(DETALLE_EVENTO, item);
    },
    inscripcionItem(item){
      let usuario = this.$store.getters.getUsuario();
      if(usuario.dni === ''){
        usuario = localStorage.getItem("usuario");
      }
      console.log("Este es el usuario: "+ usuario);
      if(this.$store.getters.getHash() === '' || usuario.dni === ''){
        this.$router.push({
          name: "ErroresView",
          params: {
            mensaje: "usuario-requerido",
          },
        });
      } else {
        this.$store.dispatch(FORMULARIO_INSCRIPCION_EVENTO, item);
      }
    },
  formatearFecha(f){
    let formato = "";
    if(f != null){
      let anio = f.substring(0, 4);
      let mes = f.substring(5, 7);
      let dia = f.substring(8, 10);
      let hora = f.substring(11, 13);
      let min = f.substring(14, 16);
      formato = dia + "-" + mes + "-" + anio + " " +  hora + ":" + min;
    }
    return formato;
  },
  },
  created() {
    this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
    console.log(this.$store.getters.getEventos());
}
}
</script>
<style scoped>
.remove_item{
    margin-left: 2%;
}
.text_menssage{
  text-align: center;
  margin: 2%;
}

.alerta {
  margin: 2% 0px 2% 0px;
}
</style>