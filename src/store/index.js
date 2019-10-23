import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import chat from './modules/chat'
import settingsStore from './modules/settings'
import contacts from './modules/contacts'
import test from './modules/test'
import calendar from './modules/calendar'

export default new Vuex.Store({
  modules: {
    calendar: calendar,
    test: test,
    chat: chat,
    contacts: contacts,
    settings: settingsStore
  }
});