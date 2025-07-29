<template>
    <v-container>
        <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Lista de Audios</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4" :elevation="8">
                <div>
                    <ListaAudio></ListaAudio>
                </div>
            </v-card-text>
        </v-card>

    </v-container>
</template>
<script>
import ListaAudio from '@/components/ListaAudio.vue';

export default {
    name: 'ListaAudiosView',
    components: { ListaAudio },
    methods: {}
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
.button_title {
    text-align: end;
    margin-bottom: 1%;
}
</style>