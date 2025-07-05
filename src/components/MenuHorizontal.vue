<template>
    <v-toolbar :elevation="8" :color="color" title="Eventos UNLa">
        
        <v-btn v-if="false" @click="inscripcion">
            <span>Inscribirse</span>
        </v-btn>
        <v-btn @click="eventos">
            <v-icon class="icon_button">mdi-calendar</v-icon><span class="text">Eventos</span>
        </v-btn>
        <v-btn @click="contenido" v-if="validarPermisos">
            <v-icon class="icon_button">mdi-table-of-contents</v-icon><span class="text" >Contenido</span>
        </v-btn>
        <v-btn @click="usuarios" v-if="validarPermisos">
            <v-icon class="icon_button">mdi-table-account</v-icon><span class="text" >Usuarios</span>
        </v-btn>
        <v-btn icon>
          <v-icon @click="escaner">mdi-qrcode-scan</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon @click="login">mdi-account</v-icon>
        </v-btn>
    </v-toolbar>
</template>
  
<script>
//import { validarUsuarioPermisos } from "@/config/validaciones";

export default {
    name: 'MenuHorizontal',
    methods: {
        inscripcion(){
            this.$router.push('/inscripcion');
        },
        login(){
            let key = this.$store.getters.getHash();
            if(key === null || key === undefined ){
                this.$router.push('/login');
            } else {
                this.$router.push('/miPerfil');
            }
        },
        eventos(){
            this.$router.push({
            name: "EventosView",
            params: {
              solapa: "eventos",
            },
          });
        },
        contenido(){
            this.$router.push('/contenidos');
        },
        usuarios(){
            this.$router.push('unlaUsuarios');
        },
        escaner(){
          this.$router.push('/escaner');
        }
    },
    data() {
        return {
            color: "#1F313B"
        }
    },
    computed: {
        validarPermisos(){
            let usuario = this.$store.getters.getUsuario();
            console.log("este usuario :" + JSON.stringify(usuario));
            let accede = false;
            if(usuario !== null){
                console.log("ingrese a validar perfil");
                let perfil = usuario.tipoUsuario.rol;
                if (perfil !== null && (perfil === 'Administrador' || perfil === 'SemiAdministrador')) {
                    accede = true;
                }
                return accede;
               
            }else{
                return accede;
            }    
        }
    }
}
</script>

<style scoped>
.text {
    display: block;
}
.icon_button {
    display: none;
}

@media (max-width: 650px) {
.text {
    display: none;
}
.icon_button {
    display: block;
}

}
</style>