<template>
  <el-form 
    ref="settings" 
    :model="settings"
    label-width="240px"
    label-position="left"
    style="padding: 16px 48px 16px"
  >
    <div class="tip">
      <h3 >MND Assistant 학습하기</h3>
      <el-divider></el-divider>
      사용자 질문에 따른 답변 데이터를 자동으로 학습합니다
    </div>
    <el-form-item label="질문">
      <el-input v-model="intent.question" placeholder="Q) 국방부 인사행정과 전화번호 뭐야?">
      </el-input>
    </el-form-item>

    <el-form-item label="답변">
      <el-input v-model="intent.answer" placeholder="A) 국방부 인사행정과 전화번호는 000-0000입니다" >
      </el-input>
    </el-form-item>
    <div>
      <el-form-item label="핵심 데이터 형식">
        <el-radio-group v-model="intent.dataType">
          <el-radio label="1" border>전화번호</el-radio>
          <el-radio label="2" border>위치</el-radio>
          <el-radio label="3" border>업무내용</el-radio>
          <el-radio label="4" border>기타</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="유사 데이터 자동 학습">
      <el-switch v-model="settings.do_alert" />
    </el-form-item>
    <div style="text-align: center">
      <el-button
        type="primary"
        class="button-boing"
        round
        @click="onSubmit"
      >
        저장하기
      </el-button>

      <el-button
        type="notify"
        class="button-boing"
        round
      >
        초기화
      </el-button>
    </div>
    

  </el-form>
  
</template>

<script>
export default {
  data(){
    return {
      intent: {
        question: '',
        answer: '',
        dataType: ''
      },
      settings: {
        user_name: '이은상',
        do_alert: true
      }
    }
  },
  mounted() {
    if(localStorage.getItem('settings')) {
      try {
        this.settings = JSON.parse(localStorage.getItem('settings'));
      } catch(e) {
        localStorage.removeItem('settings');
      }
    }
  },
  methods: {
    onSubmit() {
      const loading = this.$loading({
        lock: true,
        text: '사용자 입력 데이터 머신러닝중...',
        background: 'rgba(0, 0, 0, 0.7)'
      });


      let th = this
      setTimeout(()=>{

        //진짜로 저장하기
        let intent = this.intent;
        console.log(intent)
        th.$store.dispatch('teachai/setIntent', intent, {root: true});

        loading.close();
        this.$message({
          message: '학습완료!',
          type: 'success',
          showClose: true
        }

        
      )}, 5500);

      // const parsedSettings = JSON.stringify(this.settings);
      // localStorage.setItem('settings', parsedSettings);

    }
  }
}

</script>

<style>
  .a{border-radius : 30px;}
  .tip{
    line-height: 80%;
    padding: 3px 15px 20px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
    text-align: left;
  }
</style>