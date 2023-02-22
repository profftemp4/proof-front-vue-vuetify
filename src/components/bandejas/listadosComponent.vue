<template>
  <div style="width:100%">
    <div v-for="(item, index) in items.data" :key="index">
      <listadoHabilitadoC v-if="item.state === 3" :colores="colores" :item="item" :session="session"
        @view_customer="ver_cliente"></listadoHabilitadoC>
    </div>
    <clienteDialogoC :dialogo="dialogCliente" :customer_id="customer_id" :session="session" :customerImage="customerImage" :token="tokenCliente" :customerDataView="customerDataView" :colores="colores" @closed_customer="cerrar_cliente"></clienteDialogoC>

    <esperarC :colores="colores" :esperar="esperar"></esperarC>
  </div>
</template>

<script>
import functionsJS from '@/js/functions.js'
export default {
  name: 'listadosC',
  components: {
    listadoHabilitadoC: () => import('@/components/bandejas/listadosHabilitadosComponent.vue'),
    clienteDialogoC: () => import('@/components/dialogos/clienteDialogoComponent.vue'),
    esperarC: () => import('@/components/widgets/esperarComponent.vue')
  },
  mixins: [functionsJS],
  props: ['colores', 'items', 'session'],
  created() {
  },
  data: () => ({
    customer_id: 0,
    dialogCliente: false,
    tokenCliente: 0,
    customerDataView: [],
    customerImage: null,
    esperar: false
  }),
  methods: {
    cerrar_cliente() {
      this.dialogCliente = false
    },
    ver_cliente(customerId) {

      this.customer_id = customerId
      this.tokenCliente = this.tokenCliente + 1
      this.dialogCliente = true
      this.dataCutomerJS(customerId)
      this.$emit('update_data_main_bandeja_general')
    }
  }
}
</script>
