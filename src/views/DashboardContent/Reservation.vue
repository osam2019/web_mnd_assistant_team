<template>
  <div>
  <el-row style="padding: 100px 24px 0px">
    <el-col
      :xl="8"
      :md="8"
      :sm="24"
    >
      <div>
        <div class="form1 grid-content bg-purple-light ">
          <div>
            <img style="margin-top: 24px"
              src="/icon__11_.png"
              
            >
            <figcaption>제 1구역(학교 지역)</figcaption>
          </div>
          <el-divider />
          <div>
            <el-button
              class="button button-boing"
              type="primary"
              @click="open1"
            >
              전산장비 예약
            </el-button>
          </div>
        </div>
      </div>
    </el-col>
    <el-col
      :xl="8"
      :md="8"
      :sm="24"
    >
      <figcaption class="form1 grid-content bg-purple-light ">
        <figcaption>
          <img style="margin-top: 24px"
            src="/icon__10_.png"
          >
          <figcaption>제 2구역(성무 지역)</figcaption>
        </figcaption>
        <el-divider />
        <div>
          <el-button
            class="button button-boing"
            type="primary"
            @click="open1"
          >
            전산장비 예약
          </el-button>
        </div>
      </figcaption>
    </el-col>
    <el-col
      :xl="8"
      :md="8"
      :sm="24"
    >
      <div class="form1 grid-content bg-purple-light ">
        <div>
          <img style="margin-top: 24px"
            src="/talk.png"
          >
          <figcaption>기타</figcaption>
        </div>
        <el-divider />

        <el-button
            class="button button-boing"
            type="primary"
            @click="dialogFormVisible = true"
          >
            직접 신청
          </el-button>

        <div>
          

          
        </div>
      </div>
    </el-col>
  </el-row>
  <el-dialog
            title="장비 수리 신청"
            :visible.sync="dialogFormVisible"
          >
            <el-form :model="form">
              <el-form-item
                class="fontsize"
                label="부서명"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="form.name"
                  style="width:350px"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="사용자"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="form.date2"
                  style="width:350px"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="연락처"
                :label-width="formLabelWidth"
              >
                <el-input
                  v-model="form.date1"
                  style="width:350px"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="상위부서"
                :label-width="formLabelWidth"
              >
                <el-select
                  v-model="form.region"
                  style="width:350px"
                  placeholder="상급 부대를 선택해 주십시오"
                >
                  <el-option
                    label="55전대"
                    value="55전대"
                  />
                  <el-option
                    label="항의원"
                    value="항의원"
                  />
                </el-select>
              </el-form-item>
            </el-form>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="dialogFormVisible = false">취소</el-button>
              <el-button
                type="primary"
                @click="dialogFormVisible = false; open1()"
              >신청</el-button>
            </span>
          </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      settings: {
        user_name: ''
        
      },
      dialogFormVisible: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '150px'
    }
  },
  methods: {
    open1() {
      //const h = this.$createElement;
      this.$notify({
        title: '전산장비 예약',
        message: '예약되었습니다',
        type : 'success'
      });
    }
  }
}
</script>

<style>
.fontsize{
  font-size: 20pt;
}
.button{
  width : 90%;
  line-height : 3;
}
.logo {
  width: 50%;
  height: 50%;}
  
  .form1
  {
  overflow : hidden;
	padding-bottom: 30px;
	background: white;
	border-radius: 3px;
	box-shadow: 0 0 10px rgba(0,0,0, .4); 
	text-align: center;
	padding-top: 10px;
}

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    margin : 30px;
    border-radius: 4px;
    min-height: 36px;
  }
  
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>