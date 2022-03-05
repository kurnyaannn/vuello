import { createStore } from 'vuex'
import vuello from './modules/vuello-store'

const vuelloStore = createStore({
  modules: {
    vuello
  }
})

export default vuelloStore