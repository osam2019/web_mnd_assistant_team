<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3498db"
    text-color="#fff"
    active-text-color="#ffeaa7"
  >
    <el-menu-item index="1">
      <template slot="title">
        <div style="display:inline-block;"><el-image
        style="width: 128px; height: 48px"
        src="/mnd_logo.png"
        fit="contain"
        >
      </el-image></div>
      </template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        Workspace
      </template>
      <el-menu-item index="2-1">
        item one
      </el-menu-item>
      <el-menu-item index="2-2">
        item two
      </el-menu-item>
      <el-menu-item index="2-3">
        item three
      </el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">
          item four
        </template>
        <el-menu-item index="2-4-1">
          item one
        </el-menu-item>
        <el-menu-item index="2-4-2">
          item two
        </el-menu-item>
        <el-menu-item index="2-4-3">
          item three
        </el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item
      index="3"
      disabled
    >
      Info
    </el-menu-item>
    <el-menu-item index="4">
      <a
        href="https://www.ele.me"
        target="_blank"
      >Orders</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
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

</style>