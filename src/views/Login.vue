<template>
  <div>
    <transition name="slide-fade" appear>
      <el-card class="login box-card">
        <div
          slot="header"
          class="clearfix"
        >
          <span>
            <el-image 
              :src="logo_url"
              style="width: 280px"
            />
          </span>
          <!-- <span>국방 어시스턴트</span> -->
          <!-- <el-button style="float: right" type="text">?</el-button> -->
        </div>
        <div>
          <form
            class="text-center"
            @submit.prevent="login"
          >
            <div class="form-group">
              <el-input 
                v-model="id" 
                type="text" 
                class="form-control" 
                placeholder="아이디"
                name="id"
                autocomplete="username"
                clearable
              />
              <el-input
                v-model="password"
                type="password" 
                class="form-control" 
                placeholder="패스워드"
                name="password"
                autocomplete="current-password"
                show-password
              />
              <p
                v-if="errorText"
                class="text-danger"
              >
                {{ errorText }}
              </p>
            </div>
            <el-row style="margin-top: 32px">
              <el-button
                type="primary"
                round
                @click="onSubmit"
              >
                로그인
              </el-button>
              <el-button
                type="info"
                round
              >
                회원가입
              </el-button>
            </el-row>
            <el-button
              type="text"
              style="margin-top: 12px"
            >
              아이디/비밀번호 찾기
            </el-button>
          </form>
        </div>
        <p>{{ errorMessage }}</p>
      </el-card>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      id: "",
      password: "",
      errorText: null,
      logo_url: "/mnd_logo.png"
    }
  },
  methods: {
    onSubmit(){
      if (!this.id) {
        this.$message({
          showClose: true,
          message: "아이디를 입력하세요!",
          type: 'error'
        })
      } else if (!this.password){
        this.$message({
          showClose: true,
          message: "패스워드를 입력하세요!",
          type: 'error'
        })
      } else {
        this.$router.push({name: "Dashboard", params: {id: this.id, password: this.password}})
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
.form-control {
  margin-top: 16px;
}
.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>