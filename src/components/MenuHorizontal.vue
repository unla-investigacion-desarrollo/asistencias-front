<template>
    <v-toolbar :elevation="8" :color="color" title="Eventos UNLa">
        
        <v-btn v-if="false" @click="inscripcion">
            <span>Inscribirse</span>
        </v-btn>
        <v-btn @click="eventos">
            <v-icon class="icon_button">mdi-calendar</v-icon><span class="text">Eventos</span>
        </v-btn>
        <v-btn @click="contenido">
            <v-icon class="icon_button">mdi-table-of-contents</v-icon><span class="text">Contenido</span>
        </v-btn>
        <v-btn @click="usuarios" >
            <v-icon class="icon_button">mdi-table-account</v-icon><span class="text">Usuarios</span>
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

export default {
    name: 'MenuHorizontal',
    methods: {
        inscripcion(){
            this.$router.push('inscripcion')
        },
        login(){
            this.$router.push('login')
        },
        eventos(){
            this.$router.push('unlaEventos')
        },
        contenido(){
            this.$router.push('contenido')
        },
        usuarios(){
          this.$router.push('unlaUsuarios')
        },
        escaner(){
          this.$router.push('escaner')
        }
    },
    data() {
        return {
            color: "#1F313B"
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