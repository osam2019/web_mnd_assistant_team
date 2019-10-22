<template>
  <div>
    <el-table
      :data="contactsList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.affiliation.toLowerCase().includes(search.toLowerCase()))"
      :default-sort = "{prop: 'name', order: 'ascending'}"
      style="width: 100%"
      @selection-change="handleSelectonChange"
      >
      
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        width="60">
        <template>
          <el-avatar size="medium" icon="el-icon-user-solid"></el-avatar>
        </template>
      </el-table-column>

      <el-table-column
        property="rank"
        label="Rank"
        width="120"
        sortable
        :formatter="formatter">
      </el-table-column>

      <el-table-column
        property="name"
        label="Name"
        width="120"
        show-overflow-tooltip
        sortable>
      </el-table-column>

      <el-table-column
        property="affiliation"
        label="Affiliation"
        show-overflow-tooltip
        sortable>
      </el-table-column>

      <el-table-column
        property="email"
        label="Email"
        show-overflow-tooltip
        sortable
        width="160">
      </el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="검색..."/>  
        </template>

        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            type="primary"
            round>
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
      contactsList: [
      {
        rank: "중사",
        name: "김중사",
        affiliation: "공사 근지단 정통대대 사이버방호중대 정보체계운영반",
        email: "kim.joongsa@af.mil"
      }, {
        rank: "상병",
        name: "이은상",
        affiliation: "공사 근지단 정통대대 사이버방호중대 정보체계운영반",
        email: "18-70012907@af.mil"
      }, {
        rank: "병장",
        name: "이정필",
        affiliation: "공사 근지단 정통대대 사이버방호중대 정보보호반",
        email: "17-70012345@af.mil"
      }, {
        rank: "상병",
        name: "김초범",
        affiliation: "17비 현병대대 영창",
        email: "18-70012906@af.mil"
      }, {
        rank: "-",
        name: "국방 오픈소스 아카데미",
        affiliation: "-",
        email: "osam@kossa.kr"
      }, {
        rank: "일병",
        name: "김김김",
        affiliation: "공본직할 항의원 특수검진과",
        email: "18-70012903@af.mil"
      }, {
        rank: "상병",
        name: "한영인",
        affiliation: "공본직할 쌔끈빠끈",
        email: "18-70001337@af.mil"
      },
      ],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row){
      console.log(index, row);
    },
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>

<style>

</style>