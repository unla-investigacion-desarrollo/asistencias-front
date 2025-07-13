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
        <v-row>
            <v-col>
            <h3>Nombre: {{ model.nombre }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Apellido: {{ model.apellido }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>DNI: {{ model.dni }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Email: {{ model.email }}</h3> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <h3>Usuario: {{ model.usuario }} </h3> 
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
            <h3>Tipo de Usuario: {{ model.tipoUsuario.rol }} </h3> 
            </v-col>
        </v-row>
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