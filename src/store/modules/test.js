const state ={
    count: 0
}

const mutations = {
  incrementCount: (state) => {
    state.count++
  }
}

const actions = {
  increment: (context) => {
    context.commit('incrementCount')
  }
}

const getters = {
  getCount: (state) => {
    return state.count
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}