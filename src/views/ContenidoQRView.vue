  <template>
    <v-container class="container">
      <v-row class="d-flex align-center justify-center" no-gutters>
        <v-col :cols="12" :md="3" >
          <v-card
            class="mx-auto title_section" :elevation="8"
        >
            <template v-slot:title>
              <div class="title_content">
                <span class="title">Codigo QR del Contenido</span>
              </div>
            </template>

            <v-card-text class="bg-surface-light pt-4 title_content">
                <v-row>
                    <v-col>
                        <qr-code :valueUrl="url" :size="size" :level="level"></qr-code>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            class="me-4"
                            color="primary"
                            @click="volver"
                            >
                            Volver
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import QrCode from "@/components/QrCode";
  
export default {
  name: 'ContenidoQRView',
  components: { QrCode },
  data() {
    return {
      size: 250,
      level: "H",
    };
  },
  computed: {
        url(){
            console.log("http://localhost:8081/#/contenido/" + this.$route.params.id);
            return "http://localhost:8081/#/contenido/" + this.$route.params.id;
        }
    },
  methods: {
    volver(){
      this.$router.go(-1);
    }
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