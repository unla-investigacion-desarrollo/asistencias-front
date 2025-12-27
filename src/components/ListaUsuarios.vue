<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El usuario fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El usuario fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El usuario fue eliminado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
  <div v-if="usuarios.length != 0">
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
              Apellido
          </th>
          <th class="text-left">
              DNI
          </th>
          <th class="text-left">
              Email
          </th>
          <th class="text-left">
              Usuario
          </th>
          <th class="text-left">
              Rol
          </th>
          <th class="text-left">
              Acciones
          </th>
          </tr>
      </thead>
      <tbody>
          <tr
          v-for="item in usuarios"
          :key="item.idUsuario"
          >
          <td>{{ item.idUsuario }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.dni }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.usuario }}</td>
          <td>{{ item.tipoUsuario.rol }}</td>
          <td>
            <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
            <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
          </td>
          </tr>
      </tbody>
      </v-table>
  </div>
  <div class="text_menssage" v-if="usuarios.length == 0">
      <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este usuario?"
        title="Eliminar Usuario"
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
import { EDITAR_USUARIO, ELIMINAR_USUARIO, OBTENER_USUARIOS, ACEPTA_ELIMINAR_USUARIO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
  export default {
    name: 'ListaTipoUsuario',
    components: { MensajeComponent },
    data(){
      return {};
    },
    computed: {
      usuarios() {
        return this.$store.getters.getUsuarios();
      },
      elimino(){
        return this.$store.getters.getEliminoUsuario();
      },
      agrego(){
        return this.$store.getters.getAgregoUsuario();
      },
      edito(){
        return this.$store.getters.getEditoUsuario();
      }
  },
  methods: {
    editarItem(item){
      this.$store.dispatch(EDITAR_USUARIO, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_USUARIO, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_USUARIO);
    }
  },
  created() {
    this.$store.dispatch(OBTENER_USUARIOS);
    console.log(this.$store.getters.getUsuarios());
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
  </style>