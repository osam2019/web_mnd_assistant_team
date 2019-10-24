<template>
  <div id="home">
    <div style="padding: 0 20% 0">
      <el-carousel :interval="3000" arrow="never" type="card"
        height="390px">
        <el-carousel-item v-for="item in carouselItems" :key="item.id">
          
          <el-image
            :src="item.src"
            style="brightness: 50%;">
          </el-image>

          <div class="up clearfix">
            <span>{{item.text}}</span>
          </div>
          
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-row :gutter="12">
      <el-col :xl="12" :sm="12" :xs="24">
        <el-card shadow="always">
          <div slot="header" class="clearfix">
            <span>공지사항</span>
            <el-button style="float: right; padding: 6px 10px" type="info" round class="button-boing">더보기</el-button>
          </div>

          <el-table
            :data="noticeTable"
            :show-header="false">
            
            <el-table-column
              prop="title">
            </el-table-column>

            <el-table-column
              prop="date"
              width="95">
            </el-table-column>
          </el-table>

        </el-card>
      </el-col>

      <!-- 메일 -->
      <el-col :xl="12" :sm="12" :xs="24">
        <el-card shadow="always" :body-style="{padding: '0px'}">
          <div slot="header" class="clearfix">
            <span>받은 편지함</span>
            <el-button @click="openMail" style="float: right; padding: 6px 10px" type="primary" round class="button-boing">
              <font-awesome-icon icon="plus"/>
              메일 보내기
            </el-button>
          </div>

          <el-table
            :data="emailData"
            :show-header="false"
            style="padding-left: 16px">

            <el-table-column
              property="title"
            />

            <el-table-column
              property="date"
              width="120"
            />

            

            

          </el-table>
        </el-card>
      </el-col>

      <el-col :xl="12" :sm="12" :xs="24">
        <el-card shadow="always">
          <div slot="header" class="clearfix">
            <span>정보작전 방호태세</span>
            <el-button style="float: right; padding: 6px 10px" type="info" round class="button-boing">더보기</el-button>
          </div>

          <div style="text-align: center">
<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
          </div>
        </el-card>
      </el-col>

      <el-col :xl="12" :sm="12" :xs="24">
        <el-card shadow="always">
          <div slot="header" class="clearfix">
            <span>날씨</span>
            <el-button style="float: right; padding: 6px 10px" type="info" round class="button-boing">더보기</el-button>
          </div>

          <el-row :gutter="24" style="padding: 0 24px">

            <el-col :span="12" class="centerize">
              <h4>오늘</h4>
              <el-image src="/weather_sunny.png" style="width: 160px; height: 160px"></el-image>
              <span style="display: block">20&deg;C / 28&deg;C</span>
            </el-col>
            <el-col :span="12" class="centerize">
              <h4>내일</h4>
              <el-image src="/weather_rain.png" style="width: 160px; height: 160px"></el-image>
              <span style="display: block">17&deg;C / 24&deg;C</span>
            </el-col>

          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeTable: [{
        title: '[공병대대] 503동 생활관 1층 화장실 공사',
        date: '2019-10-24'
      }, {
        title: '[정통대대] 윈도우즈10 업그레이드 관련 공지',
        date: '2019-10-24'
      }, {
        title: '[보급대] 10월 생월자 케이크',
        date: '2019-10-24'
      }, {
        title: '[항의원] 10월 상병 건강검짐 공지 ',
        date: '2019-10-24'
      }],
      carouselItems: [{
        id: 1,
        src: '/carousel1.jpg',
        text: '美공군무관 부대방문'
      }, {
        id: 2,
        src: '/carousel2.jpg',
        text: '중국공군 항공의학 대표단 부대방문'
      },{
        id: 3,
        src: '/carousel3.jpg',
        text: '곰두리 축구단 공사 방문'
      },{
        id: 4,
        src: '/carousel4.jpg',
        text: '학교장 병사 생활관 현장순시'
      },{
        id: 5,
        src: '/carousel5.jpg',
        text: '공중강하훈련 현장지도'
      }]
    }
  },
  computed: {
    emailData(){
      return this.$store.getters['email/getOnly6'];
    }
  },
  methods: {
    openMail(){
      this.$router.push('/dashboard/emails');
      this.$store.dispatch('email/setOpenMailForm', true, {root: true})
      this.$store.dispatch('email/setTo', "이은상 <eunshang@mnd.mil>;", {root: true})
    }
  }
}
</script>

<style>
#home {
  padding: 24px;
  
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #B721FF 0%, #21D4FD  100%);

  height: 100%;
}
.el-carousel__mask {
  background-color: transparent !important;
}
.el-card {
  min-height: 360px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.el-card {
  margin-bottom: 24px;
}
.el-image {
  border-radius: 16px;
}
.up {
  text-align: center;
  color: aliceblue
}
.el-progress {
  margin-top: 32px;
}
.el-alert {
  margin-top: 32px;
}
.centerize {
  text-align: center;
}
h4 {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>