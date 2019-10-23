<template>
  <div>
    <el-table
      :data="contactsList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.affiliation.toLowerCase().includes(search.toLowerCase()))"
      :default-sort="{prop: 'name', order: 'ascending'}"
      style="width: 100%"
      
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
  </div>
</template>

<script>
export default {
  data(){
    return {
      
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
    }
  }
}
</script>

<style>

</style>