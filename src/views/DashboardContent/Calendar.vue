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
      title="이벤트 등록"
      :visible.sync="addEventDialogVisible"
    >
      <!-- start end title content class -->
      <el-form
        :model="formEvent"
        label-width="120px"  
      >

        <el-form-item label="제목">
          <el-input v-model="formEvent.title"></el-input>
        </el-form-item>

        <el-form-item label="이벤트 시작">
          <el-date-picker
            v-model="formEvent.start"
            type="datetime"
            placeholder="날짜와 시간을 지정하세요.">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="이벤트 끝">
          <el-date-picker
            v-model="formEvent.end"
            type="datetime"
            placeholder="날짜와 시간을 지정하세요.">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="내용">
          <el-input type="textarea" v-model="formEvent.content"></el-input>
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
      }
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