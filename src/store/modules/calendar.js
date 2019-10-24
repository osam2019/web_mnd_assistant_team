const state = {
  events: [{
    start: '2019-09-30 09:00',
    end: '2019-09-30 12:00',
    title: '사격',
    content: '',
    class: 'reservation'
  },{
    start: '2019-10-08 00:00',
    end: '2019-10-08 23:59',
    title: '휴가',
    content: '홍콩 여행',
    class: 'holiday'
  },{
    start: '2019-10-09 00:00',
    end: '2019-10-09 23:59',
    title: '휴가',
    content: '홍콩 여행',
    class: 'holiday'
  },{
    start: '2019-10-10 00:00',
    end: '2019-10-10 23:59',
    title: '휴가',
    content: '홍콩 여행',
    class: 'holiday'
  },{
    start: '2019-10-11 00:00',
    end: '2019-10-11 23:59',
    title: '휴가',
    content: '홍콩 여행',
    class: 'holiday'
  },{
    start: '2019-10-14 00:00',
    end: '2019-10-14 23:59',
    title: '대체휴일',
    content: '',
    class: 'holiday'
  },{
    start: '2019-10-22 13:00',
    end: '2019-10-22 15:00',
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
  }, {
    start: '2019-10-29 00:00',
    end: '2019-10-29 02:00',
    title: '병사의 날',
    content: '',
    class: 'leisure'
  }, {
    start: '2019-10-31 18:30',
    end: '2019-10-31 20:30',
    title: '반 회식',
    content: '삼겹살집',
    class: 'work'
  }, {
    start: '2019-11-08 07:30',
    end: '2019-11-09 00:00',
    title: '당직 ㅠㅠ',
    content: '102동 생활관',
    class: 'reservation'
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