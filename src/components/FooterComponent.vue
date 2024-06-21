<template>
    <v-footer
      class="footer"
    >
      <div class="footer_icons">
        <v-btn
          v-for="icon in icons"
          :key="icon.icono"
          :icon="icon.icono"
          @click="redirect(icon.url)"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>
  
  
      <v-divider class="footer_divider"></v-divider>
  
      <div class="footer_register">
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
.footer {
  background-color: #78909C;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.footer_icons{
  grid-column: 2/6;
  grid-row: 1;
}

.footer_divider{
  grid-column: 2/6;
  grid-row: 2;
}
.footer_register {
  grid-column: 2/6;
  grid-row: 3;
}

</style>