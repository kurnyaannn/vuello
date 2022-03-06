import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import vuello from './modules/vuello-store'

const vuelloStore = createStore({
  modules: {
    vuello
  },
  plugins: [createPersistedState()],
})

export default vuelloStore