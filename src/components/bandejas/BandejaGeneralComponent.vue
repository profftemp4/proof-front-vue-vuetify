<template>
  <div style="width:100%">
    <v-container fluid>
      <v-card>

        <v-tabs v-model="tab" :background-color="colores.secundario" centered dark icons-and-text>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1" @click="updateData()">BANDEJA<v-icon>mdi-inbox</v-icon></v-tab>
          <v-tab v-if="session.idUser === 1" href="#tab-2">CREAR USUARIO <v-icon>mdi-account-plus</v-icon></v-tab>
          <v-tab v-if="session.idUser === 1" href="#tab-3">CREAR SERVICIO<v-icon>mdi-apps</v-icon></v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item :key="1" :value="'tab-1'">
            <v-card flat>
              <v-card-text>

                <listadosC :colores='colores' :session="session" :items="items"
                  @update_data_main_bandeja_general="updateData"></listadosC>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>

    </v-container>
  </div>
</template>
<script>
export default {
  name: 'BandejaGeneralC',
  props: ['colores', 'loadingData', 'items', 'session'],
  components: {
    listadosC: () => import('@/components/bandejas/listadosComponent.vue')
  },
  data: () => ({
    tab: null
  }),
  methods: {
    updateData() {
      this.$emit('update_data')
    }
  }
}
</script>
