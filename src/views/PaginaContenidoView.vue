<template>
    <v-container>
        <v-row>
            <v-col class="card">
                <v-card
                class="mx-auto title_section" :elevation="8"
            >
                <template v-slot:title>
                <div class="title_content">
                    <span class="title">{{ contenido.titulo }}</span>
                </div>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                    <v-row class="description">
                        <v-col>
                            <p >{{ contenido.descripcion }}</p>
                        </v-col>
                    </v-row>  
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
        <v-row v-if="contenido.imagenes.length > 0">
            <v-col class="card">
                <v-card
                class="mx-auto title_section" :elevation="8"
            >
                <template v-slot:title>
                <div class="title_content">
                    <span class="title" v-if="contenido.imagenes.length > 1">Imagenes</span>
                    <span class="title" v-if="contenido.imagenes.length == 1">Imagen</span>
                </div>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                    <v-row v-for="(item, index) in contenido.imagenes" :key="index">
                        <v-col>
                            <img width="600" height="400" :src="item.imagen" alt="" srcset="">
                        </v-col>   
                    </v-row>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>

        <v-row v-if="contenido.videos.length > 0">
            <v-col class="card">
                <v-card
                class="mx-auto title_section" :elevation="8"
            >
                <template v-slot:title>
                <div class="title_content">
                    <span class="title" v-if="contenido.videos.length > 1">Videos</span>
                    <span class="title" v-if="contenido.videos.length == 1">Video</span>
                </div>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                    <v-row v-for="(item, index) in contenido.videos" :key="index">
                        <v-col>
                            <iframe class="video" :src="convertirVideo(item.video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </v-col>   
                    </v-row>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>

        <v-row v-if="contenido.audios.length > 0">
            <v-col class="card">
                <v-card
                class="mx-auto title_section" :elevation="8"
            >
                <template v-slot:title>
                <div class="title_content">
                    <span class="title" v-if="contenido.audios.length > 1">Audios</span>
                    <span class="title" v-if="contenido.audios.length == 1">Audio</span>
                </div>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                    <v-row v-for="(item, index) in contenido.audios" :key="index">
                        <v-col>
                            <audio controls class="audio">
                            <source :src="item.audio" type="audio/mp3" >
                            Tu navegador no soporta el elemento de audio.
                            </audio>
                        </v-col>   
                    </v-row>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="boton">
                <v-btn color="primary" @click="$router.go(-1)">Volver</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { convertirAEmbed } from '@/config';
import { OBTENER_CONTENIDO_PUBLICO } from '../store/actions-types';
export default {
    name: 'PaginaContenidoView',
    components: {},
    computed: {
        contenido() {
            return this.$store.getters.getContenido();
            }
        },
    methods: {
      convertirVideo(item){
        return convertirAEmbed(item);
      },
    },
    mounted() {
        if(this.$store.getters.getContenido().titulo != ""){
            const id = this.$route.params.id;
            console.log(id);
            this.$store.dispatch(OBTENER_CONTENIDO_PUBLICO, id);
        }
    }
}
</script>

<style scoped>

.title_section { background-color: #383854; }
  
.title {
    color: #fff;
}
.title_content{
    text-align: center;
}

.description {
    text-align: start;
    margin: 2%;
}

.card {
    text-align: center;
    margin: 2% 10% 0px 10%;
}

.boton {
    text-align: center;
    margin: 3% 0px 2% 0px;
}

.video {
    width: 100%;
    height: 400px;
}

.audio {
    width: 100%;
}
</style>