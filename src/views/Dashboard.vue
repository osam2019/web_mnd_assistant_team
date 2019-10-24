<template>
  <transition name="el-fade-in-linear">
    <div>
      <ChatScreen />
      <div class="parent">
        <div class="top" style="z-index: 1">
          <TopNav />
        </div>
        
        <div class="temp-container">
        <Sidebar />
        <router-view class="content"/>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import ChatScreen from '../components/ChatScreen'
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'


export default {
  name: 'Dashboard',
  components: {
    TopNav, Sidebar, ChatScreen
  },
  methods: {

  }
}



</script>

<style scoped>

.temp-container {
  display:flex;
}

.temp-container > .content {
  flex:1;
  display: grid;
  grid-auto-rows: min-content;
}

.el-button.el-button--primary{
  border-bottom: 2px solid #007dff;
}
.el-button.el-button--info{
  border-bottom: 2px solid #71757b;
}
.el-button.el-button--notify{
  border-bottom: 2px solid #cccccc;
}
</style>