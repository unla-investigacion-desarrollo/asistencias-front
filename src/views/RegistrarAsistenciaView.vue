<template>
  <v-container>    
    <v-row>
      <v-col>
        <v-card
          class="mx-auto title_section" :elevation="8"
        >
          <template v-slot:title>
            <div class="title_content">
              <span class="title">Escaner</span>
            </div>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            <RegistrarAsistencia></RegistrarAsistencia>
          </v-card-text>
        </v-card> 
      </v-col>
    </v-row>    
  </v-container>
</template>
  
<script>
import RegistrarAsistencia from '@/components/RegistrarAsistencia.vue';
 
export default {
  name: 'RegistrarAsistenciaView',
  components: { RegistrarAsistencia },
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