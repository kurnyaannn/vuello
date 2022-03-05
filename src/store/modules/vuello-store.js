const state = {
  savedTasks: []
}

const getters = {
  getSavedTasks(state) {
    return state.savedTasks
  },
  getD() {
    return 'OKE'
  }
}

const actions = {
  saveTask({ commit }, task) {
    commit('SET_TASK', task)
  },
  removeTask({ commit }, task) {
    commit('REMOVE_TASK', task)
  }
}

const mutations = {
  SET_TASK(state, task) {
    state.savedTasks.push(task)
    localStorage.setItem('vuello', JSON.stringify(state.savedTasks))
  },
  REMOVE_TASK(state, task) {
    state.savedTasks.filter(item => item.id !== task.id)
    localStorage.setItem('vuello', JSON.stringify(state.savedTasks))
  }
}

const vuelloModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default vuelloModule