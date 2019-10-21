<template>
<div></div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      id: "",
      password: "",
      errorText: null
    }
  },
  methods: {
    login() {
      if (!this.id) {
        this.errorText = "아이디를 입력하세요!"
      } else if (!this.password){
        this.errorText = "패스워드를 입력하세요!"
      } else {
        this.$router.push({name: "Chat", params: {id: this.id, password: this.password}})
      }
    }
  }
}
</script>

<style scoped>
.login{
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
input {
  margin-top: 10px;
}
</style>