<template>
    <div class="content_imagen">
        <div class="mensaje_imagen">
            <v-icon
                class="mb-6"
                color="success"
                icon="mdi-check-circle-outline"
                size="100"
                v-if="$route.params.mensaje != 'sin-resultados'"
        ></v-icon>
        <v-icon
                class="mb-6"
                color="warning"
                icon="mdi-alert-outline"
                size="100"
                v-if="$route.params.mensaje == 'sin-resultados'"
        ></v-icon>
        </div>
    </div>
    <div class="mensaje_container"> 
        <div class="mensaje">
            <span class="titulo" v-html="mensaje"></span>
        </div>
    </div>
    <div class="boton" v-if="$route.params.mensaje == 'registro-evento' || $route.params.mensaje == 'actualizo-registro-evento' || $route.params.mensaje == 'elimino_inscripcion' || $route.params.mensaje == 'sin-resultados'"> 
        <div>
            <v-btn color="primary" @click="$router.push('/')">Ir a Inicio</v-btn> 
        </div>
    </div>
    <div class="volver" v-if="$route.params.mensaje == 'sin-resultados'"> 
        <div>
            <v-btn color="primary" @click="$router.go(-1)">Volver</v-btn> 
        </div>
    </div>
</template>

<script>
import mensajes from "@/config/mensajes";
export default {
name: 'MensajesView',
components: {},
computed: {
    mensaje() {
        return mensajes[this.$route.params.mensaje];
    }
}
}
</script>

<style scoped>
.mensaje_container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 2% 0px 2% 0px;
    grid-auto-rows: minmax(100px, auto);
}

.content_imagen {
    text-align: center;
    margin-top: 10%;
}

.mensaje {
    grid-column: 2/6;
    grid-row: 1;
}

.titulo {
    font-size: 30px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    line-height: normal;
}

.boton {
    text-align: center;
}

.volver {
    text-align: center;
    padding-top: 2%;
}
</style>