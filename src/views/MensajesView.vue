<template>
    <div class="content_imagen">
        <div class="mensaje_imagen">
            <v-icon
                class="mb-6"
                color="success"
                icon="mdi-check-circle-outline"
                size="100"
        ></v-icon>
        </div>
    </div>
    <div class="mensaje_container"> 
        <div class="mensaje">
            <span class="titulo" v-html="mensaje"></span>
        </div>
    </div>
</template>

<script>
import mensajes from "../config/mensajes";
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
</style>