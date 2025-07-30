<template>
    <v-container>
        <v-row>
            <v-col>
                <p class="error">{{ error }}</p>

                <qrcode-stream :camera="camera" @init="onInit" @decode="onDecode" :paused="paused">
                    <v-btn id="lector" color="primary" @click="switchCamera">Cambiar Camara</v-btn>
                </qrcode-stream>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                El resultado es: {{ this.result }}
            </v-col>
        </v-row>
    </v-container>
<div>
    
</div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { MARCAR_ASISTENCIA } from '../store/actions-types';

export default {
    name: 'RegistrarAsistencia',
    components: { QrcodeStream },

    data () {
        return {
        camera: 'rear',
        noRearCamera: false,
        noFrontCamera: false,
        paused: false,
        result: '',
        error: ''
        }
    },

    methods: {
        switchCamera () {
        switch (this.camera) {
            case 'front':
            this.camera = 'rear';
            break;
            case 'rear':
            this.camera = 'front';
            break;
        }
        },

        onDecode (result) {
            this.result = result;
            let qr = {
                qrCode: result
            };
            
            console.log("El resultado es: " + result);
            console.log("El resultado que se envia es:" + JSON.stringify(qr));
            this.$store.dispatch(MARCAR_ASISTENCIA, qr);
            this.paused = true;
        },

        async onInit (promise) {
        try {
            await promise;
        } catch (error) {
            const triedFrontCamera = this.camera === 'front';
            const triedRearCamera = this.camera === 'rear';

            const cameraMissingError = error.name === 'OverconstrainedError';

            if (triedRearCamera && cameraMissingError) {
            this.noRearCamera = true;
            }

            if (triedFrontCamera && cameraMissingError) {
            this.noFrontCamera = true;
            }

            console.error(error);
        }
        }
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

</style>
