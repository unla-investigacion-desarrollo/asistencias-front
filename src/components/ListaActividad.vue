<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La actividad fue agregada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La actividad fue modificada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="La actividad fue eliminada exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
  <div class="filtro">
      <v-row >
        <v-col>
          <v-btn color="primary" @click="mostrar">Filtros</v-btn>
        </v-col>
        <v-col class="boton">
          <v-btn color="primary" rounded="lg" @click="agregar">Agregar</v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="filtro" v-if="buscar">
      <v-row>
        <v-col>
          <v-select
          v-model="filtro"
          :items="opciones"
          label="Filtros"
        ></v-select>
        </v-col>
        <v-col v-if="filtro === 'Categoria'">
          <v-autocomplete 
            v-model="parametro"
            :items="tiposEventos"
            label="Categoria"
            required
        ></v-autocomplete>
        </v-col>
        <v-col v-if="filtro === 'Evento'">
          <v-autocomplete 
            v-model="parametro"
            :items="eventos"
            label="Evento"
            required
        ></v-autocomplete>
        </v-col>
        <v-col>
          <v-btn class="remove_item" color="primary" @click="busqueda" icon="mdi-magnify"></v-btn>
        </v-col>
      </v-row>
    </div>
  <div v-if="actividades.length != 0">
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
            Edificio
          </th>
          <th class="text-left">
            Ubicacion
          </th>
          <th class="text-left">
            Estado
          </th>
          <th class="text-left">
            Evento
          </th>
          <th class="text-left">
            Cupo
          </th>
          <th class="text-left">
            Cupo Limite
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in actividades"
          :key="item.idActividad"
        >
          <td>{{ item.idActividad }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ formatearFecha(item.fechaInicio) }}</td>
          <td>{{ formatearFecha(item.fechaFin) }}</td>
          <td>{{ item.edificio }}</td>
          <td>{{ item.ubicacion }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.nombreEvento }}</td>
          <td>{{ item.cupo }}</td>
          <td>{{ item.cupoMax }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete" v-if="!this.validoPas"></v-btn>
              <v-btn class="remove_item" color="primary" @click="detalleItem(item)" icon="mdi-note-search-outline"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="actividades.length == 0">
      <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar esta actividad?"
        title="Eliminar Actividad"
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
import { ACTIVIDAD_NUEVA, TRAER_ACTIVIDADES_GENERICO, EDITAR_ACTIVIDAD, ELIMINAR_ACTIVIDAD, OBTENER_ACTIVIDADES, DETALLE_ACTIVIDAD, ACEPTA_ELIMINAR_ACTIVIDAD, OBTENER_TIPOS_EVENTOS_PUBLICOS, OBTENER_EVENTOS_PUBLICOS } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
import { filtroActividad } from '@/config';
export default {
  name: 'ListaActividad',
  components: { MensajeComponent },
  data(){
    return {
      filtro: "Categoria",
      buscar: false,
      parametro: ""
    };
  },
  computed: {
    eventos() {
      return this.$store.getters.getEventosFormateados(); 
    },
    tiposEventos(){
      return this.$store.getters.getTiposEventosFormateados();
    },
    actividades() {
      return this.$store.getters.getActividades();
    },
    elimino(){
      return this.$store.getters.getEliminoActividad();
    },
    agrego(){
      return this.$store.getters.getAgregoActividad();
    },
    edito(){
      return this.$store.getters.getEditoActividad();
    },
    validoPas(){
        return this.$store.getters.getPas();
    },
    opciones(){
      return filtroActividad;
    },
},
methods: {
  agregar(){
    this.$store.dispatch(ACTIVIDAD_NUEVA);
  },
  editarItem(item){
    this.$store.dispatch(EDITAR_ACTIVIDAD, item);
  },
  modalEliminar(item){
    this.$store.dispatch(ACEPTA_ELIMINAR_ACTIVIDAD, item);
  },
  eliminarItem(){
    this.$store.dispatch(ELIMINAR_ACTIVIDAD);
  },
  detalleItem(item){
    this.$store.dispatch(DETALLE_ACTIVIDAD, item);
  },
  mostrar(){
    this.buscar = !this.buscar;
  },
  busqueda(){
      if(this.filtro == "Categoria" && this.parametro != ""){
        this.$store.dispatch(TRAER_ACTIVIDADES_GENERICO, this.obtenerObjTipoEvento(this.parametro));
      } else if (this.filtro == "Evento"){
        this.$store.dispatch(TRAER_ACTIVIDADES_GENERICO, this.obtenerObjEvento(this.parametro));
      }
  },
  obtenerObjEvento(dato){
    let id;
    let lista = this.$store.getters.getEventos(); 
    if(lista.length > 0){
          lista.forEach(e => {
          if(dato == e.nombre){
            id = e.idEvento;
          }
          });
        }
    let obj = {
      idEvento: id
    };
    return obj;
  },
   obtenerObjTipoEvento(dato){
    let id;
    let lista = this.$store.getters.getTipoEventos(); 
    if(lista.length > 0){
          lista.forEach(e => {
          if(dato == e.nombre){
            id = e.idTipoEvento;
          }
          });
        }
    let obj = {
      idTipoEvento: id
    };
    return obj;
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
watch: {
  filtro(nuevo, viejo) {
    if(nuevo != viejo){
      this.parametro = "";
      this.$store.dispatch(OBTENER_TIPOS_EVENTOS_PUBLICOS);
      this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
      this.$store.dispatch(OBTENER_ACTIVIDADES);
    }
  },
},
created() {
  this.$store.dispatch(OBTENER_ACTIVIDADES);
  this.$store.dispatch(OBTENER_TIPOS_EVENTOS_PUBLICOS);
  this.$store.dispatch(OBTENER_EVENTOS_PUBLICOS);
  console.log(this.$store.getters.getActividades());
},
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
.filtro { 
  margin: 2% 0px 2% 0px;
}

.boton{
  text-align: end;
}
</style>