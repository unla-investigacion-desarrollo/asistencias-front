<template>
    <v-toolbar :elevation="8" color="blue-grey-darken-4" title="Eventos UNLa">
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
        }
    },
}
</script>

<style scoped>

</style>