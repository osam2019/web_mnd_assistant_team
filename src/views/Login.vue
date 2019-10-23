<template>
  <video-bg
    :sources="['/video.mp4']"
    img="/video_placeholder.png"
  >
    <transition
      name="slide-fade"
      appear
    >
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
                class="button-boing"
                @click="onSubmit"
                v-loading.fullscreen.lock="fullscreenLoading"
              >
                로그인
              </el-button>
              <el-button
                type="info"
                class="button-boing"
                round
                v-loading.fullscreen.lock="fullscreenLoading"
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
  </video-bg>
</template>

<script>
import VideoBg from 'vue-videobg'

export default {
  name: 'Login',
  components: {
    VideoBg
  },
  data () {
    return {
      id: "",
      password: "",
      errorText: null,
      logo_url: "/mnd_logo.png",
      fullscreenLoading: false
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
        const loading = this.$loading({
          lock: true,
          text: '로그인중...',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {

          this.$message({
            message: '환영합니다, 이은상님!',
            type: 'success'
          })

          setTimeout(()=>{
            loading.close();  
            this.$router.push('/dashboard')
          }, 1000)

        }, 2000);
          
        
      }
    }
  }
}
</script>

<style scoped>
.login{
  max-width: 450px;
  margin-top: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
.VideoBg {
  min-height: 640px;
}
.VideoBg__content {
  text-align: center;
  background-color: rgba(52, 72, 92, 0.7);
}
.el-button.el-button--primary{
  border-bottom: 2px solid #007dff;
}
.el-button.el-button--info{
  border-bottom: 2px solid #71757b;
}
.el-button:hover {
  -webkit-transform: translate(0, -2px);
  -ms-transform: translate(0, -2px);
  transform: translate(0, -2px);
}
</style>