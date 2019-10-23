<template>
  <el-row>
    <el-col :xl="6" :md="12" :sm="24">
      <div class="form1 grid-content bg-purple-light ">
        <div>
        <img src="https://better-renew.co.kr/wp-content/uploads/2018/02/ico_1.png" width = "1000px" height = "1000px">
        </div>
        <div>
        <el-button type="info" plain>전산장비 예약</el-button>
        </div>
      </div>
    </el-col>
    <el-col :xl="6" :md="12" :sm="24">
      <div class="grid-content bg-purple-light ">
        <el-button  type="info" plain>시설물 예약</el-button>
      </div>
    </el-col>
    <el-col :xl="6" :md="12" :sm="24">
      <div class="grid-content bg-purple-light">
        <el-button  type="info" plain>회의실 예약</el-button>
      </div>
    </el-col>
    <el-col :xl="6" :md="12" :sm="24">
      <div class="grid-content bg-purple-light">
        <el-button  type="info" plain>회의실 예약</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style>
    .logo {
	width: 50%;
	height: 50%;}
 .form1 {
	width: 280px;
	margin: 150px auto;
	padding-bottom: 20px;
	background: white;
	border-radius: 3px;
	box-shadow: 0 0 10px rgba(0,0,0, .4); 
	text-align: center;
	padding-top: 30px;
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
    padding : 20px;
    margin : 30px;
    border-radius: 4px;
    min-height: 36px;
  }
  .hv{
      position : absolute;
      top:50%;
      left : 50%;
      margin : auto;
  }
  .hc{
      width:200px; left:0; right:0; margin-left:auto; margin-right:auto;}
  .vc{
      height:40px; top: 0; bottom:0; margin-top:auto; margin-bottom:auto;}
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>