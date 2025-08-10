<template>
  <v-container>
    <v-row>
      <v-col>
        <qrcode-vue :value="valueUrl" :size="size" :level="level"></qrcode-vue>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
<script>
import QrcodeVue from "qrcode.vue";
export default {
  name: "QrCode",
  props: {
    valueUrl: String,
    size: Number,
    level: String
  },
  components: {
    QrcodeVue
  },
};
</script>