<template>
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          color="warning" 
          icon="mdi-pencil"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        title="Modificar Tipo Evento"
      >
        <v-card-text>
          <v-text-field
            v-model="model.tipoEvento"
            :counter="45"
            label="Tipo de Evento"
            required
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Cerrar"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Guardar"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    components: {},
    computed:{
      model() {
        return this.$store.getters.getTipoEvento();
      }
    },
    data: () => ({
      dialog: false,
    }),
  }
</script>
