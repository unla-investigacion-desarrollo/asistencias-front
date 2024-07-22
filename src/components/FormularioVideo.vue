<template>
    <v-text-field
      v-model="model.video"
      :counter="45"
      label="Video"
      :rules="validationText"
      required
    ></v-text-field>
</template>
  
<script>
export default {
  name: 'FormularioVideo',
  components: { },
  data() {
    return {
      model: this.$store.getters.getVideo(),
      validationText: [
        v => !!v || 'El campo es requerido',
        v => (v && v.length >= 2) || 'El campo debe contener al menos 2 caracteres',
        ],
    };
  }
}
</script>

<style scoped>
.container_button{
  text-align: center;
}
</style>