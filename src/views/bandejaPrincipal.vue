<template>
  <BandejaGeneralC :colores="colores" :loadingData="loadingData" :items="items" :session="session"
    @update_data="update_data_main"></BandejaGeneralC>
</template>

<script>
import BandejaGeneralC from '../components/bandejas/BandejaGeneralComponent'
import functionsJS from '@/js/functions.js'
export default {
  name: 'bandejaPrincipalC',

  components: {
    BandejaGeneralC,
  },
  mixins: [functionsJS],
  data: () => ({
    colores: { primario: '#0072CE', secundario: 'black', tercero: 'white', white: 'white', orange: 'orange', black: 'black', teal: 'teal', red: 'red darken-1', green: 'green', amber: 'amber', blueGrey: 'blue-grey', grey: 'grey darken-2', brownDarken: 'brown darken-2' },
    loadingData: false,
    items: { data: []},
    session: { idUser: 0 }
  }),
  created() {
    this.initial_dataJS()
  },
  methods: {
    update_data_main() {
      this.initial_dataJS()
    }
  }
}
</script>
