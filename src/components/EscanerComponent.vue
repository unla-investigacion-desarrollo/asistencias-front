<template>
 <div>
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
    <v-row>
      <v-col>
          El resultado es: {{ this.result }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
    name: 'EscanerComponent',
    components: { QrcodeStream },

    data() {
    return {
      paused: false,
      result: '',
      showScanConfirmation: false
    }
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
    
      window.location.href=(JSON.parse(this.result));
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
.scan-confirmation {
  position: inherit;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.icono {
    text-align: center;
    margin-top: 30%;
}

</style>
