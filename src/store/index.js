import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlIni: process.env.VUE_APP_INI,
    url: process.env.VUE_APP_URL,
    urlFile: process.env.VUE_APP_FILE,
    session: { idUser: 0, },
    colores: { primario: '', secundario: '', tercero: '', blanco: '', orange: '', black: '', red: '', teal: '', green: '', amber: '', blueGre: '', grey: '', brownDarken: '' },
  },
  mutations: {
    setToken (state, value) {
      state.token = value
    },
    setSession (state, { idUser }) {
      state.session.idUser = idUser
    }
  },
  getters: {
    getUrlIni: state => state.urlIni,
    getUrl: state => state.url,
    getUrlFile: state => state.urlFile,
    getSession: state => state.session,
    getColores: state => state.colores
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
