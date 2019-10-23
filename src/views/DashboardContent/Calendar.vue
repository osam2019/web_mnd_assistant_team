<template>
  <div style="height: 700px">
    <vue-cal 
      :selected-date="new Date().toISOString()"
      :startWeekOnSunday="true"
      :time-from="9 * 60"
      :disable-views="['years', 'year']"
      default-view="month"
      events-on-month-view="short"
      editable-events
      :events="events"
      locale="ko">
    </vue-cal>

    <el-button
      type="primary"
      @click="toggleEventForm">
      이벤드 등록하기
    </el-button>

    <el-dialog
      v-loading="loading"
      element-loading-text="저장중..."
      title="이벤트 등록"
      :visible.sync="addEventDialogVisible"
    >
      <!-- start end title content class -->
      <el-form
        :model="formEvent"
        :rules="rules"
        ref="formEvent"
        label-width="120px"  
      >

        <el-form-item label="제목" prop="title">
          <el-input v-model="formEvent.title"></el-input>
        </el-form-item>

        <el-form-item label="이벤트 시작" prop="start">
          <el-date-picker
            v-model="formEvent.start"
            type="datetime"
            placeholder="날짜와 시간을 지정하세요.">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="이벤트 끝" prop="end">
          <el-date-picker
            v-model="formEvent.end"
            type="datetime"
            placeholder="날짜와 시간을 지정하세요.">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="이벤트 종류" prop="class">
          <el-radio-group v-model="formEvent.class">
            <el-radio-button label="업무" index="work"></el-radio-button>
            <el-radio-button label="휴가" index="holiday"></el-radio-button>
            <el-radio-button label="레져" index="leisure"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="내용" prop="content">
          <el-input type="textarea" v-model="formEvent.content"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            저장하기
          </el-button>
          <el-button @click="toggleEventForm">취소</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/ko.js'
import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },
  data(){
    return {
      formEvent : {
        start: '',
        end: '',
        title: '',
        content: '',
        class: ''
      },
      rules : {
        title: [
          { required: true, message: '제목을 입력해주십시오!', trigger: 'blur'}
        ],
        start: [
          {type: 'date', required: true, message: '시작 날짜를 정해주십시오!', trigger: 'change'}
        ],
        end: [
          // {type: 'date'}
        ]
      },
      loading: false
    }
  },
  computed: {
    events() {
      return this.$store.getters['calendar/getEvents']
    },
    addEventDialogVisible: {
      get: function() {return this.$store.getters['calendar/getEditEventDialogVisible']},
      set: function(b){ return this.$store.dispatch('calendar/setEditEventDialogVisible', b, {root: true}) }
    }
  },
  methods: {
    addEvent(event){
      this.$store.dispatch('calendar/addEvent', event, {root: true})
    },
    toggleEventForm(){
      this.addEventDialogVisible = !this.addEventDialogVisible
    },
    onSubmit(){
      this.$refs['formEvent'].validate((valid) => {
        
        if(valid){

          this.loading = true

          let form = {
            title: '',
            start: '',
            end: '',
            class: '',
            content: ''
          }

          form.title = this.formEvent.title;

          let toYYYYMMDDHHMMSS = (dt) => `${
            (dt.getMonth()+1).toString().padStart(2, '0')}/${
            dt.getDate().toString().padStart(2, '0')}/${
            dt.getFullYear().toString().padStart(4, '0')} ${
            dt.getHours().toString().padStart(2, '0')}:${
            dt.getMinutes().toString().padStart(2, '0')}:${
            dt.getSeconds().toString().padStart(2, '0')}`

          form.start = toYYYYMMDDHHMMSS(this.formEvent.start)

          if(!this.formEvent.end){
            this.formEvent.end = new Date(this.formEvent.start.getTime());
            this.formEvent.end.setHours(this.formEvent.end.getHours() + 1);
          }

          form.end = toYYYYMMDDHHMMSS(this.formEvent.end)
          form.class = this.formEvent.class;
          form.content = this.formEvent.content;

          switch(this.formEvent.class){
            case '휴가': form.class = 'holiday'; break;
            case '레져': form.class = 'leisure'; break;
            default: form.class = 'work'
          }

          console.log(form)

          setTimeout(() => {
            this.addEventDialogVisible = false
            this.addEvent(form)
            this.clearForm()
            this.loading = false
          }, 800);
        } else {
          return false
        }

      })
    },
    clearForm(){
      this.$refs['formEvent'].resetFields()
    }
  }
}
</script>

<style>

.vuecal__menu, .vuecal__cell-events-count {background-color: #7cbce7;}
.vuecal__menu button {border-bottom-color: #fff;color: #fff;}
.vuecal__menu button.active {background-color: rgba(255, 255, 255, 0.15);}
.vuecal__title-bar {background-color: #abd3ee;}
.vuecal__cell.today, .vuecal__cell.current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell.selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell.selected:before {border-color: rgba(52, 152, 219, 0.5);}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}
.vuecal__title-bar {
  font-size: 0.9em;
}
.vuecal__menu button {
  font-size: 1em;
}
.vuecal__event-content {
  font-size: 0.75em;
}
.vuecal__event-time { font-size: 0.6em; }
.vuecal__event-title.vuecal__event-title--edit { font-size: 0.9em; }

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}

.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.work {background-color: rgba(171, 211, 238, 0.9);border: 1px solid rgb(150, 201, 235);color: #444;}
.vuecal__event.holiday {background-color: rgba(245, 108, 108, 0.9);border: 1px solid rgb(242, 74, 74);color: #fff;}
</style>