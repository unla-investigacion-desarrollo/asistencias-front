  <template>
    <v-container class="container">
      <v-row>
        <v-col>
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Estadisticas de los eventos</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4 title_content">
                <v-row class="d-flex justify-center">
                  <v-col>
                    <EstadisticasXEvento></EstadisticasXEvento>
                  </v-col>
                </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import EstadisticasXEvento from '@/components/EstadisticasXEvento.vue';
  
export default {
  name: 'EstadisticasXEventoView',
  components: { EstadisticasXEvento },
  data() {
    return {};
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

.container { 
    margin-top: 2%;
}

</style>