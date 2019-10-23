const state = {
  intent: {
    question: '',
    answer: '',
    dataType: ''
  }
}

const mutations = {
setIntent: (state, i) => {
  state.intent = i 
}
}

const actions = {
setIntent: (context, i) => {
  context.commit('setIntent', i)
}
}

const getters = {
getIntent: (state) => {
  return state.intent
}
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}