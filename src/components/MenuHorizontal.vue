<template>
    <v-toolbar :elevation="8" :color="color" title="">
    <v-btn icon class="pa-0"
      to="/"
    >
    <v-icon size="30">
        <v-img
        src="@/assets/favicon_unla.png"
        contain
      />
    </v-icon>
      
    </v-btn>

    <v-toolbar-title class="titulo">Eventos UNLa</v-toolbar-title>

    <v-spacer />
        <v-btn @click="eventos">
            <v-icon class="icon_button">mdi-calendar</v-icon><span class="text">Eventos</span>
        </v-btn>
        <v-btn @click="contenido">
            <v-icon class="icon_button">mdi-table-of-contents</v-icon><span class="text" >Contenido</span>
        </v-btn>
        <v-btn @click="usuarios" v-if="(!this.validoPp) && (!this.validoPae) && (!this.validoPas)">
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
        inicio(){
            this.$router.push('/');
        },
        login(){
            let key = this.$store.getters.getHash();
            if(key === null || key === undefined || key === ''){
                this.$router.push('/login');
            } else {
                this.$router.push('/miPerfil');
            }
        },
        eventos(){
            if(this.validoPp || this.validoPae){
                this.$router.push('/eventosUnla');
            } else {
                this.$router.push({
                    name: "EventosView",
                    params: {
                        solapa: "eventos",
                    },
                });
            }
        },
        contenido(){
            if(this.validoPp){
                this.$router.push('/contenidos');
            } else {
                this.$router.push({
                    name: "ContenidoAudioVisualView",
                    params: {
                        solapa: "contenidos",
                    },
                });
            }
        },
        usuarios(){
            this.$router.push({
            name: "UsuariosView",
            params: {
              solapa: "usuarios",
            },
          });      
        },
        escaner(){
          if(this.validoPp || this.validoPae){
                this.$router.push('/escaner');
            } else {
                this.$router.push({
                    name: "CamaraView",
                    params: {
                        solapa: "asistencia",
                    },
                });
            }
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
        },
        validoPp(){
            return this.$store.getters.getPp();
        },
        validoPa(){
            return this.$store.getters.getPa();
        },
        validoPsa(){
            return this.$store.getters.getPsa();
        },
        validoPae(){
            return this.$store.getters.getPae();
        },
        validoPas(){
            return this.$store.getters.getPas();
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

.logo {
    margin-left: 1%;
}

@media (max-width: 650px) {
.text {
    display: none;
}
.icon_button {
    display: block;
}

.titulo {
    display: none;
}

}
</style>