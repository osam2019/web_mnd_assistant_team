<template>
  <div id="app">
    <Sidebar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:msg="message" />
    <input type="text" v-model="message" />
    <button @click="alertMessage">Alert</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, Sidebar
  },
  data(){
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    alertMessage(){
      alert(this.message)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
