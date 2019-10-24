<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#3498db"
    text-color="#fff"
    :router="true"
    @select="handleSelect"
  >
    <el-menu-item
      index="/dashboard"
      @click="$router.push('/dashboard')"
    >
      <template slot="title">
        <div style="display:inline-block;">
          <el-image
            style="width: 200px;height: 50px; vertical-align: baseline; margin-top: 5px;"
            src="/mnd_logo_white.png"
            fit="contain"
          />
        </div>
      </template>
    </el-menu-item>
    
    <el-menu-item index="/dashboard/about">
      <font-awesome-icon
        icon="info-circle"
        size="lg"
      />
      <span slot="title">정보</span>
    </el-menu-item>

    <el-menu-item @click="hamburger" style="float: right">
      <font-awesome-icon
        icon="hamburger"
        size="lg"
      />
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    hamburger(){
      this.$notify({
        title: '햄버거',
        message: '햄버거 햄버거',
        type: 'success'
      });
    }
  }
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item {
  height: 64px !important;
}
.el-menu.el-menu--horizontal {
  -webkit-box-shadow: 0px -63px 65px 36px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -63px 65px 36px rgba(0,0,0,0.75);
  box-shadow: 0px -63px 65px 36px rgba(0,0,0,0.75);
  border-bottom: 2px solid rgb(49, 144, 198);
}
span {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13pt;
  color: #fff;
}
svg {
  color: #fff;
  margin-right: 8px;
}
</style>