<template>
    <v-toolbar :elevation="8" :color="color" title="Eventos UNLa">
        <v-btn icon>
          <v-icon @click="login">mdi-account</v-icon>
        </v-btn>
        <v-btn v-if="false" @click="inscripcion">
            <span>Inscribirse</span>
        </v-btn>
        <v-btn @click="eventos">
            <span>Eventos</span>
        </v-btn>
        <v-btn @click="actividades">
            <span>Actividades</span>
        </v-btn>
        <v-btn @click="contenido">
            <span>Contenido</span>
        </v-btn>
        <v-btn @click="usuarios">
            <span>Usuarios</span>
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
            this.$router.push('login')
        },
        actividades(){
            this.$router.push('login')
        },
        contenido(){
            this.$router.push('login')
        },
        usuarios(){
            this.$router.push('unlaUsuarios')
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

</style>