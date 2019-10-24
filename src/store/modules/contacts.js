const state = {
  contactsList: [
    {
      id: '1',
      rank: "중위",
      name: "최민우",
      affiliation: "공사 근지단 정통대대 사이버방호중대",
      email: "mwchoi@af.mil"
    }, {
      id: '2',
      rank: "중사",
      name: "김동준",
      affiliation: "공사 근지단 정통대대 사이버방호중대 정보보호반",
      email: "kim.junmoon@af.mil"
    }, {
      id: '3',
      rank: "상병",
      name: "이은상",
      affiliation: "공사 근지단 정통대대 사이버방호중대 정보체계운영반",
      email: "18-70012907@af.mil"
    }, {
      id: '4',
      rank: "병장",
      name: "이정필",
      affiliation: "공사 근지단 정통대대 사이버방호중대 정보보호반",
      email: "17-70012345@af.mil"
    }, {
      id: '5',
      rank: "상병",
      name: "김초범",
      affiliation: "17비 현병대대 영창",
      email: "18-70012906@af.mil"
    }, {
      id: '6',
      rank: "-",
      name: "국방 오픈소스 아카데미",
      affiliation: "-",
      email: "osam@kossa.kr"
    }, {
      id: '7',
      rank: "일병",
      name: "김검진",
      affiliation: "공본직할 항의원 특수검진과",
      email: "18-70012903@af.mil"
    }, {
      id: '8',
      rank: "상병",
      name: "한영인",
      affiliation: "공본직할 쌔끈빠끈",
      email: "18-70001337@af.mil"
    },
  ],
  criteria: '',
  search: '',
}

const mutations = {
addContact: (state, contact) => {
  state.contactsList = [...state.contactsList, contact]
},
setContact: (state, contact) => {
  let i = state.contactsList.findIndex(c => c.id == contact.id);
  if(i == -1) 
    this.addContact(state, contact);
  else
    state.contactsList[i] = contact;
},
setCriteria: (state, criteria) => {
  state.criteria = criteria.trim();
},
setSearch: (state, search) => {
  state.search = search.trim();
}
}

const actions = {
addContact: (context, contact) => {
  context.commit('addContact', contact);
},
setContact: (context, contact) => {
  context.commit('setContact', contact);
},
setCriteria: (context, criteria) => {
  context.commit('setCriteria', criteria);
},
setSearch: (context, search) => {
  context.commit('setSearch', search);
}
}

const getters = {
getContacts: (state) => {
  return state.contactsList
},
searchContacts: (state) => {
  return state.contactsList.filter((contact) => {
    return contact.name.includes(state.criteria) ||
      contact.affiliation.includes(state.criteria)
  })
},
getSearch: (state) => {
  return state.search
}
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}