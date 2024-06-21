<template>
    <div class="error_container">
        <div class="error_mi"></div>
        <div class="error">
            <span class="titulo" v-html="error"></span>
        </div>
        <div class="error_md"></div>
    </div>
</template>

<script>
import errores from "../config/errores";
export default {
name: 'ErroresView',
components: {},
computed: {
    error() {
        return errores[this.$route.params.mensaje];
    }
}
}
</script>

<style scoped>
.error_container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 2% 0px 2% 0px;
    grid-auto-rows: minmax(100px, auto);
}

.error_mi {
    grid-column: 1;
}

.error {
    grid-column: 2/6;
    grid-row: 2;
}

.error_md {
    grid-column: 7;
}

.titulo {
    font-size: 30px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    line-height: normal;
}
</style>