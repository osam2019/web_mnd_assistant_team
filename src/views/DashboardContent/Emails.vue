<template>
  <div>
    <div style="padding: 12px 18px 0px;">
      <el-button class="button-boing" type="primary" round
        @click="openAndClearForm">
        <font-awesome-icon icon="plus"/>
        메일 쓰기
      </el-button>

      <el-divider direction="vertical"></el-divider>

      <el-dropdown round split-button type="default">
        <font-awesome-icon icon="inbox" />
        <span class="ls">받은 편지함</span>

        <el-dropdown-menu slot="dropdown" class="rounded-dropdown">

          <el-dropdown-item>
            <font-awesome-icon icon="file" />
            <span class="ls">임시 메일함</span>
          </el-dropdown-item>

          <el-dropdown-item>
            <font-awesome-icon icon="paper-plane" />
            <span class="ls">보낸 편지함</span>
          </el-dropdown-item>

          <el-dropdown-item>
            <font-awesome-icon icon="star" />
            <span class="ls">중요한 메일</span>
          </el-dropdown-item>
          
          <el-dropdown-item>
            <font-awesome-icon icon="exclamation-triangle" />
            <span class="ls">스팸/수상한 메일</span>
          </el-dropdown-item>

          <el-dropdown-item>
            <font-awesome-icon icon="trash-alt" />
            <span class="ls">삭제된 메일</span>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>

      <el-divider direction="vertical"></el-divider>

      <el-button class="button-boing" type="warning" round>
        <font-awesome-icon icon="star"/>
      </el-button>

      <el-button class="button-boing" type="danger" round
        style="margin-left: 16px">
        <font-awesome-icon icon="exclamation"/>
        <span class="ls">해킹메일 신고</span>
      </el-button>

      <!-- Floated to right -->
      <div style="float: right;">

        <el-button class="button-boing" type="danger" round
          @click="deleteEmails">
          <font-awesome-icon icon="trash-alt" />
        </el-button>

        <el-divider direction="vertical"></el-divider>

        <el-button class="button-boing" type="info" round>
          <font-awesome-icon icon="ellipsis-v"/>
        </el-button>

      </div>

      

    </div>
    <el-divider></el-divider>
    
    <el-table
      :data="emailData"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />

      <el-table-column
        property="from"
        label="보낸이"
        width="120"
      />

      <el-table-column
        property="title"
        label="제목"
      />

      <el-table-column
        property="date"
        label="날짜"
        width="120"
        
      ><template slot-scope="scope">{{scope.row.date}}</template>
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
    </el-table>
    

    <el-dialog 
      title="메일 쓰기"
      :visible.sync="openMailForm"
    >
      <el-form :model="mailForm" ref="mailForm">

        <el-form-item style="margin-top: 8px">
          <el-input v-model="mailForm.to" type="text" placeholder="받는이">
            <el-button slot="prepend" type="default" round @click="writeToMe">내게쓰기</el-button>
            <el-button slot="append" type="default" round>Cc</el-button>
            <el-button slot="append" type="default" round>Bcc</el-button>
          </el-input>
        </el-form-item>

        

        <el-form-item>
          <el-input v-model="mailForm.title" type="text" placeholder="제목"></el-input>
        </el-form-item>

<!-- faPaperclip, faFont, faTextWidth, faTextHeight,
  faStrikethrough, faUnderline, faItalic -->

        <el-button-group>
          <el-button round><font-awesome-icon icon="paperclip"/> 
            <span class="ls">파일 첨부</span>
          </el-button>
          
          <el-tooltip class="item" effect="dark" content="글씨체" placement="top">
            <el-button round><font-awesome-icon icon="font"/></el-button>
          </el-tooltip>
          
          <el-tooltip class="item" effect="dark" content="글 크기" placement="top">
            <el-button round><font-awesome-icon icon="text-height"/></el-button>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="굵게" placement="top">
            <el-button round><font-awesome-icon icon="bold"/></el-button>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="취소선" placement="top">
            <el-button round><font-awesome-icon icon="strikethrough"/></el-button>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="밑줄" placement="top">
            <el-button round><font-awesome-icon icon="underline"/></el-button>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="이태릭체" placement="top">
            <el-button round><font-awesome-icon icon="italic"/></el-button>
          </el-tooltip>

        </el-button-group>

        <el-form-item style="margin-top: 24px">
          <el-input v-model="mailForm.content" type="textarea" placeholder="내용을 입력하세요." 
            :autosize="{ minRows: 8, maxRows: 30}"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit" round>보내기</el-button>
        <el-button @click="openMailForm = false" round>취소</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      mailForm: {
        from: '상병 이은상',
        id: '',
        to: "이은상 <eunshang@mnd.mil>;",
        title: '',
        content: '',
        date: '2019-10-24'
      },
      activeCollapses: [],
      multipleSelection: [],
      fontSize: 12
    }
  },
  computed: {
    emailData(){
      return this.$store.getters['email/getMails'];
    },
    openMailForm: {
      get: function(){ return this.$store.getters['email/getOpenMailForm'] },
      set: function(b){ return this.$store.dispatch('email/setOpenMailForm', b, {root: true}) }
    },
    to: {
      get: function(){ return this.$store.getters['email/getTo'] },
      set: function(s){ return this.$store.dispatch('email/setTo', s, {root: true}) }
    }
  },
  methods: {
    onSubmit(){

      const loading = this.$loading({
        lock: true,
        text: '메일 보내는 중',
        // spinner: 'el-icon-loading',
        // background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        this.addEmail(this.mailForm);
      
        this.$refs['mailForm'].resetFields()
        this.mailForm.to = "이은상 <eunshang@mnd.mil>;";
        this.mailForm.title = '';
        this.mailForm.content = '';

        this.toggleMailForm(); 
        loading.close()
      }, 900);
      
    },
    clearForm(){
      this.$refs['mailForm'].resetFields()
      // this.mailForm.to = "이은상 <eunshang@mnd.mil>;"
    },
    addEmail(mail){
      mail.id = Math.floor(Math.random() * 9999999999999)
      const clone = JSON.parse(JSON.stringify(mail));

      this.$store.dispatch('email/addEmail', clone, {root: true})
    },
    deleteEmails(){
      this.$store.dispatch('email/deleteEmails', this.multipleSelection, {root: true})
    },
    openAndClearForm(){
      this.openMailForm = true
      this.clearForm()
    },
    toggleMailForm(){
      this.openMailForm = !this.openMailForm
    },
    toggleSelection(rows) {
      
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      
      this.multipleSelection = val;

      console.log(this.multipleSelection);
    },
    writeToMe(){
      this.mailForm.to = "이은상 <eunshang@mnd.mil>;"
    }
  }
}
</script>

<style>
.el-divider.el-divider--horizontal {
  margin: 12px 0;
}
.el-divider.el-divider--vertical {
  margin: 0 16px;
}
.divider-narrow {
  margin: 3px 0 !important;
  background-color: #ccc;
}
.el-dropdown button.el-button.el-button--default {
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom: 2px solid #ccc;
}
.el-dropdown button.el-button.el-button--default.el-dropdown__caret-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  width: 40px;
}
.el-dropdown:hover {
  -webkit-transform: translate(0, -2px);
  -ms-transform: translate(0, -2px);
  transform: translate(0, -2px);
}
.ls {
  margin-left: 12px;
}
.el-dialog {
  width: 80% !important;
  max-width: 800px;
}
</style>