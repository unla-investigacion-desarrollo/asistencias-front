<template>
  <v-app>
    <menu-horizontal></menu-horizontal> 
    <v-main>
      <router-view/>
    </v-main>

    <div class="icon_container">
      <div class="icon_position">
        <v-fab @click="escaner" class="icon_scanner" elevation="4" color="surface-variant" icon="mdi-qrcode-scan"></v-fab>
      </div>
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
    escaner(){
      this.$router.push('escaner')
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
    margin: 2% 0px 2% 0px;
    grid-auto-rows: minmax(50px, auto);
}

.icon_position {
    grid-column: 6;
    grid-row: 1;
}
</style>
