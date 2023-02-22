<template>
  <div style="width:100%">
    <v-sheet :color="colores.primario" style="padding:1px" rounded>
      <v-card flat>
        <v-card-text class="pt-0">
          <v-row no-gutters>
            <v-col cols="12" md="5" class="pr-1">
              &nbsp;
            </v-col>
            <v-col cols="12" md="2" class="pr-1 align-center">
              <v-toolbar dense flat align="center"><span :style="{ 'color': colores.primario }"
                  style="font-size:20px"><b>IMAGEN SERVICIO</b></span></v-toolbar>
              <v-img max-height="128" max-width="128" ></v-img>
              <!-- <div class="body-1">{{ }}</div> -->
            </v-col>
            <v-col cols="12" md="5" class="pr-1">
              &nbsp;
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" class="pr-1">
              <texto2 :colores="colores" :titulo="'NOMBRE'" ></texto2>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" md="4" class="pr-1">
              <texto2 :colores="colores" :titulo="'TIPO'" >
              </texto2>
            </v-col>
            <v-col cols="12" md="4">
              <texto2 :colores="colores" :titulo="'FECHA INICIO'" ></texto2>
            </v-col>
            <v-col cols="12" md="4">
              <texto2 :colores="colores" :titulo="'FECHA FIN'" ></texto2>
            </v-col>
          </v-row>
          <v-row>
          </v-row>
          <br>
          <b>OBSERVACIONES</b>
          <v-row no-gutters>
            <v-col cols="12">
              <v-card-text class="pa-0" style="white-space:pre-wrap;">
                <!-- <div>{{  }}</div> -->
              </v-card-text>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-sheet>

  </div>
</template>
    
<script>
export default {
  name: 'servicioClienteDialogoC',
  components: {
    texto2: () => import('@/components/widgets/text2Component.vue')
  },
  props: ['colores', 'dialogo', 'customerDataView', 'token', 'customer_id', 'session', 'customerImage'],
  data: () => ({
    cerrar: false
  }),
  created() {
  },
  methods: {
    cerrar_cliente(popcion) {
      this.cerrar = true
      setTimeout(() => {
        this.cerrar = false
      }, 3000)
      this.$emit('closed_customer')
    }
  }
}
</script>
    