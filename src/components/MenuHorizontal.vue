<template>
    <v-toolbar :elevation="8" color="blue-grey-darken-4" title="Eventos UNLa">
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
}
</script>

<style scoped>

</style>