<template>
  <div v-if="agrego" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El rol fue agregado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

  <div v-if="edito" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El rol fue modificado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>

   <div v-if="elimino" class="alerta">
    <v-alert
      closable
      icon="$success"
      title="El rol fue eliminado exitosamente."
      text=""
      type="success"
      variant="outlined"
    ></v-alert>
  </div>
  <div v-if="roles.length != 0">
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
            Rol
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in roles"
          :key="item.idTipoUsuario"
        >
          <td>{{ item.idTipoUsuario }}</td>
          <td>{{ item.rol }}</td>
          <td>
              <v-btn class="remove_item" color="warning" @click="editarItem(item)" icon="mdi-pencil"></v-btn>
              <v-btn class="remove_item" color="error" @click="modalEliminar(item) & (dialog = true)" icon="mdi-delete"></v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div class="text_menssage" v-if="roles.length == 0">
      <Mensaje-component valor="sin-registros"></Mensaje-component>
  </div>
  <div>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        text="Estas seguro de eliminar este rol?"
        title="Eliminar Rol"
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
import { EDITAR_ROL, ELIMINAR_ROL, OBTENER_ROLES, ACEPTA_ELIMINAR_TIPO_USUARIO } from '../store/actions-types';
import MensajeComponent from './MensajeComponent.vue';
  export default {
    name: 'ListaTipoUsuario',
    components: { MensajeComponent },
    data(){
      return{};
    },
    computed: {
      roles() {
        return this.$store.getters.getRoles();
      },
      elimino(){
        return this.$store.getters.getEliminoRol();
      },
      agrego(){
        return this.$store.getters.getAgregoRol();
      },
      edito(){
        return this.$store.getters.getEditoRol();
      }
  },
  methods: {
    editarItem(item){
        this.$store.dispatch(EDITAR_ROL, item);
    },
    modalEliminar(item){
      this.$store.dispatch(ACEPTA_ELIMINAR_TIPO_USUARIO, item);
    },
    eliminarItem(){
        this.$store.dispatch(ELIMINAR_ROL);
    }
  },
  created() {
    this.$store.dispatch(OBTENER_ROLES);
    console.log(this.$store.getters.getRoles());
},
}
</script>
<style scoped>
.remove_item{
  margin-left: 2%;
}

.alerta {
  margin: 2% 0px 2% 0px;
}
</style>