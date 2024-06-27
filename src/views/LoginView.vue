<template>
    <div class="login_container">
      <div class="login_content">
        <v-card
            class="mx-auto title_section"
        >
            <template v-slot:title>
            <span class="title">Iniciar Sesión</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                <LoginComponent></LoginComponent>
            </v-card-text>
        </v-card>
      </div>
    </div>
  </template>
  
  <script>
import LoginComponent from '../components/LoginComponent.vue';

  
  export default {
    name: 'LoginView',
    components: { LoginComponent },
  }
</script>
  
<style scoped>
.title_section { background-color: #455A64; text-align: center;}

.title {
    color: #fff;
}

.login_container{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 5% 0px 0px 0px;
}
.login_content{
  grid-column: 3/5;
  grid-row: 1;
}

@media screen and (max-width: 600px) {
  .login_container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 5% 0px 0px 0px;
}
.login_content{
  grid-column: 2/4;
  grid-row: 1;
}
}
</style>