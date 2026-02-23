<template>
  <v-app :class="fondo">
    <menu-horizontal></menu-horizontal> 
  
      <v-main>
        <router-view/>
      </v-main>
      <v-overlay
        v-model="cargando"
        persistent
        class="d-flex align-center justify-center"
      >
        <v-progress-circular
          :size="100"
          color="error"
          indeterminate
        />
      </v-overlay>
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
    },
    fondo(){
      const routeName = this.$route.name;
      console.log(routeName);
      if (routeName === 'Pagina404View') {
        return 'error404';
      }
      return 'pantallas';
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

.error404{
  background-image: url('./assets/404Escritorio.png');
  background-position: center;
  background-repeat: no-repeat;
}

.pantallas{
  background: white;
}

@media screen and (max-width: 600px) {
.error404{
  background-image: url('./assets/404Celular.PNG');
  background-position: center;
}
}
</style>
