<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3498db"
    text-color="#fff"
    :router="true">

    <el-menu-item index="/dashboard"
      @click="$router.push('/dashboard')">
      <template slot="title">
        <div style="display:inline-block;">
          <el-image
            style="width: 128px; height: 48px"
            src="/mnd_logo.png"
            fit="contain">
          </el-image>
        </div>
      </template>
    </el-menu-item>
    
    <el-menu-item index="/dashboard/about">
      <font-awesome-icon icon="hamburger" size="lg"/>
      <span slot="title">정보</span>
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
    }
  }
}
</script>

<style scoped>
span {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13pt;
  color: #fff;
}
svg {
  margin-right: 8px;
}
</style>