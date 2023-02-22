<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="iniciarSesion" >
        <span class="mr-2">Iniciar Sesion</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',

  data: () => ({
    colores: null,
    session: { id: 0 }
  }),
  created () {
    this.session = this.$store.getters.getSession
  },
  methods: {
    iniciarSesion () {
      // Iniciar Sesion
    }
  }
};
</script>
