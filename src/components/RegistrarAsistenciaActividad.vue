<template>
    <v-container>
        <v-row v-if="registro" class="alerta">
            <v-col>
                <v-alert
                    closable
                    icon="$success"
                    title="La asistencia a la actividad del evento se registro exitosamente."
                    text=""
                    type="success"
                    variant="outlined"
                ></v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
    <qrcode-stream
      :paused="paused"
      @detect="onDetect"
      @camera-on="onCameraOn"
      @camera-off="onCameraOff"
      @error="onError"
    >
      <div
        v-show="showScanConfirmation"
        class="scan-confirmation"
      >
      <v-row>
        <v-col class="icono">
            <v-icon
                
                color="success"
                icon="mdi-check-circle-outline"
                size="100"
        ></v-icon>
        </v-col>
      </v-row>
        
      </div>
    </qrcode-stream>
            </v-col>
        </v-row>
    </v-container>
<div>
    
</div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { MARCAR_ASISTENCIA_ACTIVIDAD } from '../store/actions-types';

export default {
    name: 'RegistrarAsistenciaActividad',
    components: { QrcodeStream },
    data() {
    return {
      paused: false,
      result: '',
      showScanConfirmation: false,
    }
  },
  computed: {
    registro(){
        return this.$store.getters.getRegistroInscripcion();
    },
    actividad() {
      return this.$store.getters.getAsistencia().actividad;
    },
  },
  methods: {
    onCameraOn() {
      this.showScanConfirmation = false
    },

    onCameraOff() {
      this.showScanConfirmation = true
    },

    onError: console.error,

    async onDetect(detectedCodes) {
      this.result = JSON.stringify(detectedCodes.map((code) => code.rawValue))
    
      console.log("El resultado es: " + JSON.parse(this.result));
      let datos = 
      {
        qr: JSON.parse(this.result),
        idActividad: this.actividad.idActividad
      }
      this.$store.dispatch(MARCAR_ASISTENCIA_ACTIVIDAD, datos);
      this.paused = true
      await this.timeout(500)
      this.paused = false
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
      })
    },
  }
    }

</script>

<style scoped>
button {
    position: relative;
    left: 10px;
    top: 10px;
}

.error {
    color: red;
    font-weight: bold;
}

.alerta {
  margin: 2% 0px 2% 0px;
}
.icono {
    text-align: center;
    margin-top: 30%;
}

</style>
