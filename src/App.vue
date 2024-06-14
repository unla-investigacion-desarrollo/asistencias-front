<template>
  <v-app>
    <menu-horizontal></menu-horizontal> 
    <v-main>
      <router-view/>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import MenuHorizontal from './components/MenuHorizontal.vue'

export default {
  components: { MenuHorizontal, FooterComponent },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
