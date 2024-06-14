<template>
    <v-footer
      class="bg-grey-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.icono"
          :icon="icon.icono"
          @click="redirect(icon.url)"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>
  
      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Universidad Nacional de Lanus</strong>
      </div>
    </v-footer>
  </template>
  
<script>
export default {
name: 'FooterComponent',
data: () => ({
      icons: [{
            icono: 'mdi-facebook',
            url: 'https://www.facebook.com/unlaoficial/?locale=es_LA'
        },
        {
            icono: 'mdi-instagram',
            url: 'https://www.instagram.com/unlaoficial/'
        },
        {
            icono: 'mdi-twitter',
            url: 'https://x.com/unlaoficial?mx=2'
        },
        {
            icono: 'mdi-linkedin',
            url: 'https://ar.linkedin.com/company/unlaoficial'
        }
      ],
    }),
    methods: {
        redirect(url){
            window.location.href = url;
        }
    },
}
</script>

<style scoped>

</style>