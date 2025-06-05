<template>
    <div class="content_imagen">
        <div class="mensaje_imagen" >
            <v-icon 
                class="mb-6"
                icon="mdi-file-search-outline"
                size="60"
        ></v-icon>
        </div>
    </div>
    <div class="mensaje_container"> 
        <div class="mensaje">
            <span class="titulo" v-html="texto"></span>
        </div>
    </div>
</template>

<script>
import mensajes from "../config/mensajes";
export default {
name: 'MensajeComponent',
components: {},
props: {
      valor: String,
    },
computed: {
    texto() {
        return mensajes[this.valor];
    }
}
}
</script>

<style scoped>
.mensaje_container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(40px, auto);
}

.content_imagen {
    text-align: center;
    margin-top: 2%;
}

.mensaje {
    grid-column: 2/6;
    grid-row: 1;
}

.titulo {
    font-size: 18px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    line-height: normal;
}
</style>