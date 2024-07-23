<template>
    <v-toolbar :elevation="8" :color="color" title="Eventos UNLa">
        <v-btn icon>
          <v-icon @click="login">mdi-account</v-icon>
        </v-btn>
        <v-btn @click="inscripcion">
            <span>Inscribirse</span>
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