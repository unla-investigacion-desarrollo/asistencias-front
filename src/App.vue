<template>
  <v-app class="fondo">
    <menu-horizontal></menu-horizontal> 
    <v-main>
      <router-view/>
    </v-main>
    <div class="spinner">
      <v-progress-circular class="spinner_content" :size="100" v-if="cargando" color="error" indeterminate></v-progress-circular>
    </div>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import MenuHorizontal from './components/MenuHorizontal.vue';
export default {
  components: { MenuHorizontal, FooterComponent },
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
  },
  computed:{
    cargando(){
      return this.$store.state.spinner;
    }
  }
}
</script>

<style scoped>
.icon_scanner{
  text-align: end;
}
.icon_container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 2% 0px 5% 0px;
    grid-auto-rows: minmax(50px, auto);
}

.icon_position {
    grid-column: 6;
    grid-row: 1;
}

.spinner{
    text-align: center;
    margin: 2% 0px 2% 0px;
}

.fondo {
  background-color: #fff;
}


</style>
