<template>
    <v-container>
        <v-row>
            <v-col class="icono">
                 <v-icon color="error" icon="mdi-alert" v-if="$route.params.mensaje !== 'error-404' && $route.params.mensaje !== 'error-servidor'"></v-icon>
                 <img src="" alt="" srcset="" v-if="$route.params.mensaje == 'error-404'">
                 <v-icon color="error" icon="mdi-wrench" v-if="$route.params.mensaje === 'error-servidor'"></v-icon>

            </v-col>
        </v-row>
        <v-row>
            <v-col class="titulo">
                <span  v-html="error"></span>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="boton">
                <v-btn color="primary" @click="$router.go(-1)" v-if="$route.params.mensaje !== 'error-invalido'">Volver</v-btn>
                <v-btn color="primary" @click="$router.push('/login')" v-if="$route.params.mensaje == 'error-invalido'">Ir al login</v-btn>
            </v-col>
        </v-row>
    </v-container>
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
.titulo {
    font-size: 30px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    line-height: normal;
}

.icono {
    font-size: 100px;
    text-align: center;
    margin: 5% 0px 2% 0px;
}

.boton {
    text-align: center;
    margin: 3% 0px 2% 0px;
}
</style>