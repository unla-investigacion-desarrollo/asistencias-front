<template>
    <v-container>       
      <v-card
            class="mx-auto title_section" :elevation="8"
        >
          <template v-slot:title>
            <div class="title_content">
              <span class="title">Escaner</span>
            </div>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            <EscanerComponent></EscanerComponent>
          </v-card-text>
        </v-card> 
        
    </v-container>
  </template>
  
  <script>
import EscanerComponent from '@/components/EscanerComponent.vue';

  
export default {
    name: 'EscanerView',
    components: { EscanerComponent },
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
</style>