import { createStore } from 'vuex'

const debug = import.meta.env.DEV

export default createStore({
  modules: {},
  strict: debug,
})
