<template>
<div>
    <p class="error">{{ error }}</p>

    <qrcode-stream :camera="camera" @init="onInit" @decode="onDecode" :paused="paused">
        <button id="lector" class="btn btn-dark" @click="switchCamera">Cambiar Camera</button>
    </qrcode-stream>
</div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
    name: 'EscanerComponent',
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
            this.camera = 'rear'
            break
            case 'rear':
            this.camera = 'front'
            break
        }
        },

        onDecode (result) {
            this.result = result
            window.location=result;
            sessionStorage.setItem(result.split(/\.[a-z]{0,}/,''),"registrado");
            this.paused = true
        },

        async onInit (promise) {
        try {
            await promise
        } catch (error) {
            const triedFrontCamera = this.camera === 'front'
            const triedRearCamera = this.camera === 'rear'

            const cameraMissingError = error.name === 'OverconstrainedError'

            if (triedRearCamera && cameraMissingError) {
            this.noRearCamera = true
            }

            if (triedFrontCamera && cameraMissingError) {
            this.noFrontCamera = true
            }

            console.error(error)
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
