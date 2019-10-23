const state = {
messageList: [{ type: 'text', author: `user1`, data: { text: `안녕하세요, 이은상님.
무엇을 도와드릴까요?` } }],
notifications: 1,
isChatOpen: false
}

const mutations = {
addNotifications: (state, n) => {
  state.notifications += n
},
resetNotifications: (state) => {
  state.notifications = 0
},
setChatState: (state, b) => {
  state.isChatOpen = b
},
addMessage: (state, message) => {
  state.messageList = [ ...state.messageList, message]
}
}

const actions = {
  addNotifications: (context, n) => {
    context.commit('addNotifications', n);
  },
  resetNotifications: (context) => {
    context.commit('resetNotifications');
  },
  setChatOpen: (context, b) => {
    context.commit('setChatState', b);
  },
  addMessage: (context, message) => {
    context.commit('addMessage', message);
  }
}

const getters = {
  getNotifications: (state) => {
    return state.notifications
  },
  getChatOpen: (state) => {
    return state.isChatOpen
  },
  getMessages: (state) => {
    return state.messageList
  }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}