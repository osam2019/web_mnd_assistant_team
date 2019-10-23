const state = {
  events: [{
    start: '2019-10-09',
    end: '2019-10-11',
    title: '휴가',
    content: '홍콩 여행',
    class: 'holiday'
  },{
    start: '2019-10-14',
    end: '2019-10-14',
    title: '대체휴일',
    content: '',
    class: 'holiday'
  },{
    start: '2019-10-21 13:00',
    end: '2019-10-21 15:00',
    title: '최하사 생일파티',
    content: '케이크 사오기',
    class: 'leisure'
  }, {
    start: '2019-10-23 14:00',
    end: '2019-10-23 16:00',
    title: 'KJCCS 보안점검',
    content: '위치: 서버실',
    class: 'work'
  }, {
    start: '2019-10-23 17:30',
    end: '2019-10-23 19:30',
    title: '외부업체 인솔',
    content: '부대 정문',
    class: 'work'
  }
  ],
  editEventDialogVisible: false
}

const mutations = {
addEvent: (state, e) => {
  state.events = [ ...state.events, e ]
},
setEditEventDialogVisible: (state, b) => {
  state.editEventDialogVisible = b
}
}

const actions = {
addEvent: (context, e) => {
  context.commit('addEvent', e)
},
setEditEventDialogVisible: (context, b) => {
  context.commit('setEditEventDialogVisible', b)
}
}

const getters = {
getEvents: (state) => {
  return state.events
},
getEditEventDialogVisible: (state) => {
  return state.editEventDialogVisible
}
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}