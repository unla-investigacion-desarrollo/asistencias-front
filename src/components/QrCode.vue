<template>
    <div>
      <qrcode-vue :value="valueUrl" :size="size" :level="level"></qrcode-vue>
    </div>
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
    }
  };
  </script>