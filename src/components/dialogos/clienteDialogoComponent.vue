<template>
  <div style="width:100%;">
    <v-layout row justify-center>
      <v-dialog v-model="dialogo" persistent max-width="900">
        <v-card v-if="customerDataView">
          <v-toolbar class="headline" :color="colores.primario" dark>VISTA CLIENTE</v-toolbar>
          <v-card-text class="pt-4">
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
                            style="font-size:20px"><b>IMAGEN
                              CLIENTE</b></span></v-toolbar>
                        <v-img max-height="128" max-width="128" :src="customerImage">
                        </v-img>
                        <div class="body-1">{{ customerDataView.image_name }}</div>
                      </v-col>
                      <v-col cols="12" md="5" class="pr-1">
                        &nbsp;
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="12" class="pr-1">
                        <texto2 :colores="colores" :titulo="'NOMBRE'" :descripcion="customerDataView.names"></texto2>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="12" md="6" class="pr-1">
                        <texto2 :colores="colores" :titulo="'DOCUMENTO'" :descripcion="customerDataView.document">
                        </texto2>
                      </v-col>
                      <v-col cols="12" md="6">
                        <texto2 :colores="colores" :titulo="'TELÉFONO'" :descripcion="customerDataView.names"></texto2>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="12">
                        <texto2 :colores="colores" :titulo="'CORREO'" :descripcion="customerDataView.names"></texto2>
                      </v-col>
                    </v-row>
                    <br>
                    <b>OBSERVACIONES</b>
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-card-text class="pa-0" style="white-space:pre-wrap;">
                          <div>{{ customerDataView.Observations }}</div>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-sheet>
            </div>

            <servicioClienteDialogoC :session="session" :customerDataView="customerDataView" :colores="colores"></servicioClienteDialogoC>

          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :color="colores.primario" dark @click="cerrar_cliente('CERRAR')">CERRAR</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
    
<script>
export default {
  name: 'clienteDialogoC',
  components: {
    texto2: () => import('@/components/widgets/text2Component.vue'),
    servicioClienteDialogoC: () => import('@/components/dialogos/servicioClienteDialogoComponent.vue'),
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
    