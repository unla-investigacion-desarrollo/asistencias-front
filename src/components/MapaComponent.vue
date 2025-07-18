<template>
    <div>
        <v-row>
            <v-col class="titulo">
                <img :src="imagen" alt="" srcset="" width="100%">
            </v-col>
        </v-row> 
    </div>
</template>
<script>
export default {
  name: 'MapaComponent',
  components: {},
  props: {
    edificio: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    imagen(){
        return `/${this.edificio}.png`;
    },
  }
}
</script>
<style scoped>
.text_menssage{
    text-align: center;
    margin: 2%;
}
.titulo {
    text-align: center;
    margin: 2%;
}
</style>