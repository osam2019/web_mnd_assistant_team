<template>
  <div>
    <el-table
      :data="emailData"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        property="from"
        label="보낸자"
        width="120">
      </el-table-column>

      <el-table-column
        property="title"
        label="제목"
        show-overflow-tooltip>
      </el-table-column>

      <el-table-column
        label="날짜"
        width="120">
        <template slot-scope="scope">{{scope.row.date}}</template>
      </el-table-column>
    
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailData: [{
        date: "2019-10-22",
        from: "소위 하늘이",
        title: "내일 회식에 대해서"
      },
      {
        date: "2019-10-22",
        from: "하사 이정필",
        title: "RE: RE: AFCCS 교체사업 견적서입니다."
      },
      {
        date: "2019-10-22",
        from: "상병 이은상",
        title: "필승! 요청하신 스캔문서입니다."
      },
      {
        date: "2019-10-22",
        from: "중위 김공군",
        title: "RE: 필승! 병사 외출 계획서입니다."
      },
      {
        date: "2019-10-21",
        from: "하사 이정필",
        title: "AFCCS 교체사업 견적서입니다."
      }
      ]
    }
  }
}
</script>
<style>

</style>