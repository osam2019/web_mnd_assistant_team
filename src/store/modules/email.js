const state = {
  emailList: [
    {
      id: '100',
      date: "2019-10-22",
      from: "소위 하늘이",
      title: "내일 회식에 대해서"
    }, {
      id: '99',
      date: "2019-10-22",
      from: "하사 이정필",
      title: "RE: RE: AFCCS 교체사업 견적서입니다."
    }, {
      id: '98',
      date: "2019-10-22",
      from: "상병 이은상",
      title: "필승! 요청하신 스캔문서입니다."
    }, {
      id: '97',
      date: "2019-10-22",
      from: "중위 김공군",
      title: "RE: 필승! 병사 외출 계획서입니다."
    }, {
      id: '96',
      date: "2019-10-21",
      from: "하사 이정필",
      title: "AFCCS 교체사업 견적서입니다."
    }, {
      id: '95',
      date: '2019-10-20',
      from: '중사 박육군',
      title: "RE: RE: RE: RE: 안녕하십니까"
    }, {
      id: '94',
      date: '2019-10-20',
      from: '중사 박육군',
      title: "RE: RE: 안녕하십니까"
    }
  ],
  openMailForm: false,
  to: ''
}

const mutations = {
addEmail: (state, mail) => {
  state.emailList = [mail, ...state.emailList]
},
deleteEmail: (state, mail) => {
  console.log('not working')
},
deleteEmails: (state, mails) => {
  let toDelete = mails.map(m => m.id);
  state.emailList = state.emailList.filter(mail => !toDelete.includes(mail.id));
},
setOpenMailForm: (state, b) => {
  state.openMailForm = b
},
setTo: (state, str) => {
  state.openMailForm = str
}
}

const actions = {
addEmail: (context, m) => {
  context.commit('addEmail', m)
},
deleteEmails: (context, m) => {
  context.commit('deleteEmails', m)
},
setOpenMailForm: (context, b) => {
  context.commit('setOpenMailForm', b)
},
setTo: (context, str) => {
  context.commit('setTo', str)
}
}

const getters = {
getMails: (state) => {
  return state.emailList
},
getOpenMailForm: (state) => {
  return state.openMailForm
},
getTo: (state) => {
  return state.to
}
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}