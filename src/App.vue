<template>
  <div id="app">
   <Dashboard />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    Dashboard
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
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
