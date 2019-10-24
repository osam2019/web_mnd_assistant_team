<template>
  <div>
    <el-table
      :data="contactsList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.affiliation.toLowerCase().includes(search.toLowerCase()))"
      :default-sort="{prop: 'name', order: 'ascending'}"
      style="width: 100%"
      :resizable="true"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
      />

      <el-table-column
        width="60"
      >
        <template>
          <el-avatar
            size="medium"
            icon="el-icon-user-solid"
          />
        </template>
      </el-table-column>

      <el-table-column
        property="rank"
        label="계급"
        width="80"
        sortable
      />

      <el-table-column
        property="name"
        label="성명"
        show-overflow-tooltip
        width="120"
        sortable
      />

      <el-table-column
        property="affiliation"
        label="소속"
        show-overflow-tooltip
        sortable
      />

      <el-table-column
        property="email"
        label="이메일"
        show-overflow-tooltip
        width="180"
        
        sortable
      />

      <el-table-column align="right">
        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="검색..."
            @change="handleSearchChange"
            clearable
          />  
        </template>

        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            round
            @click="handleEdit(scope.$index, scope.row)"
          >
            수정
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="contactsDialogVisible">
      <el-form :model="contactForm">
        <el-form-item style="display: none">
          <el-input v-model="contactForm.id"></el-input>
        </el-form-item>
        <el-form-item label="계급">
          <el-input v-model="contactForm.rank"></el-input>
        </el-form-item>
        <el-form-item label="이름">
          <el-input v-model="contactForm.name"></el-input>
        </el-form-item>
        <el-form-item label="소속">
          <el-input v-model="contactForm.affiliation"></el-input>
        </el-form-item>
        <el-form-item label="이메일">
          <el-input v-model="contactForm.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit" class="button-boing" round>저장하기</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      contactForm: {
        id: '',
        rank: '',
        name: '',
        affiliation: '',
        email: ''
      },
      contactsDialogVisible: false
    }
  }, 
  computed: {
    contactsList() {
      return this.$store.getters['contacts/getContacts']
    },
    search: {
      get: function(){ return this.$store.getters['contacts/getSearch'] },
      set: function(val){ return this.$store.dispatch('contacts/setSearch', val, {root: true}) }
    }
  },
  methods: {
    handleEdit(index, row){
      this.contactForm = row;
      this.contactsDialogVisible = true
      console.log(index, row);
    },
    formatter(row, column) {
      return row.address;
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
    },
    handleSearchChange(val){
      console.log(val)
    },
    onSubmit(){
      const loading = this.$loading({
        lock: true,
        text: '저장중',
        // spinner: 'el-icon-loading',
        // background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        this.$store.dispatch('contacts/setContact', this.contactForm, {root: true})
        this.contactsDialogVisible = false
        loading.close();
      }, 500);
    }
  }
}
</script>

<style>

</style>