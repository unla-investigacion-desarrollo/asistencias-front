<template>
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
    <v-container v-if="model.dni !== ''">
        <v-list dense class="rounded-lg mx-auto">
          <v-list-item>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Nombre</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.nombre }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Apellido</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.apellido }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">DNI</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.dni }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Email</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.email }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="3">
                <strong class="font-weight-bold">Usuario</strong>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                {{ model.usuario }}
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
        <v-row>
            <v-col class="boton">
                <v-btn color="primary" @click="editarUsuario()">Editar Perfil</v-btn>
            </v-col>
            <v-col class="boton">
                <v-btn color="primary" @click="salir()">Cerrar Sesión</v-btn>
            </v-col>
        </v-row>

    </v-container>
    <div class="text_menssage" v-if="model.dni === ''">
        <h3>Ocurrió un problema al obtener la información, por favor intente acceder nuevamente.</h3>
    </div>
   
</template>
<script>
import { LOGOUT, OBTENER_INFO_USUARIO_EMAIL, EDITAR_USUARIO_LOGUEADO } from '../store/actions-types';
export default {
  name: 'DetalleUsuario',
  components: {},
  computed:{
    model(){
        return this.$store.getters.getUsuario();
    },
    edito(){
        return this.$store.getters.getEditoUsuario();
    }
  },
  methods: {
    salir() {  
      this.$store.dispatch(LOGOUT);
    },
    editarUsuario() {  
      this.$store.dispatch(EDITAR_USUARIO_LOGUEADO);
    },
    },
    created() {
        if(this.$store.getters.getUsuario().dni === ""){
            this.$store.dispatch(OBTENER_INFO_USUARIO_EMAIL, this.model.email);
            console.log(this.$store.getters.getEventos());
        }
        
    }
}
</script>
<style scoped>
.text_menssage{
    text-align: center;
    margin: 2%;
}

.boton {
    text-align: center;
    margin: 3% 0px 2% 0px;
}

.alerta {
  margin: 2% 0px 2% 0px;
}
</style>