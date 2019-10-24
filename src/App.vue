<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">
        Login
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/dashboard">
        Dashboard
      </router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0px !important;
}
#app {
  font-family: 'Noto Sans KR', 'NanumBarunGothic', Arial, 'SeoulNamsan', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 14pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-button.el-button--primary{
  border-bottom: 2px solid #007dff;
}
.el-button.el-button--info{
  border-bottom: 2px solid #71757b;
}
.el-button.el-button--notify{
  border-bottom: 2px solid #ddd;
}
.el-button.el-button--danger{
  border-bottom: 2px solid #d05d5d;
}
.el-button.el-button--warning{
  background-color: #efb866;
  border-color: #efb866;
  border-bottom: 2px solid #E6A23C;
}
.el-button--warning:hover, .el-button--warning:focus {
    background: #f9c982 !important;
    border-color: #f9c982 !important;
    color: #FFFFFF;
}
.el-button.button-boing:hover {
  -webkit-transform: translate(0, -2px);
  -ms-transform: translate(0, -2px);
  transform: translate(0, -2px);
}
</style>
