import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'
import imAssets from './modules/imAssets'
import casePeportForm from './modules/casePeportForm'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    imAssets,
    casePeportForm
  },
  getters
})

export default store
