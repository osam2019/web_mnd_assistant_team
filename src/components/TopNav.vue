<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3498db"
    text-color="#fff"
  >
    <el-menu-item index="1"
      @click="$router.push('/dashboard')">
      <template slot="title">
        <div style="display:inline-block;"><el-image
        style="width: 128px; height: 48px"
        src="/mnd_logo.png"
        fit="contain"
        >
      </el-image></div>
      </template>
    </el-menu-item>
    
    <el-menu-item 
      @click="$router.push('/dashboard/about')"
      index="4">
      정보
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