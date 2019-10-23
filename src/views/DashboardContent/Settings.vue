<template>
  <el-form 
    :model="settings" 
    ref="settings"
    label-width="240px"
    label-position="left"
    style="padding: 16px 48px 16px">
    
    <el-form-item label="성명">
      <el-input v-model="settings.user_name"></el-input>

    </el-form-item>

    <el-divider></el-divider>
    
    <el-form-item label="이 기기에 알림 보내기">
      <el-switch v-model="settings.do_alert"></el-switch>
    </el-form-item>

    <el-form-item>
      <el-button 
        type="primary" 
        @click="onSubmit"
        round>
        저장하기
      </el-button>

      <el-button 
        type="notify"
        round>
        초기화
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data(){
    return {
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
      
      const parsedSettings = JSON.stringify(this.settings);
      localStorage.setItem('settings', parsedSettings);

      this.$message({
        message: '저장되었습니다!',
        type: 'success',
        showClose: true
      })
    }
  }
}
</script>

<style>
  .a{border-radius : 30px;}
</style>