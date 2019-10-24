<template>
  <transition name="el-fade-in-linear">
    <div>
      <ChatScreen />
      <div class="parent">
        <div class="top" style="z-index: 1">
          <TopNav />
        </div>
        
        <Sidebar />
        
        <!-- <div class="right" /> -->
        <el-collapse-transition>
          <router-view/>
        </el-collapse-transition>
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
.parent {
  display: grid;
  grid-template-columns: 0fr 6fr 0fr;
  grid-template-rows: 64px 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0px;
}

.top { grid-area: 1 / 1 / 2 / 6; }
.left { grid-area: 2 / 1 / 6 / 2; }
.center { grid-area: 2 / 2 / 6 / 3; }
.right { grid-area: 2 / 3 / 6 / 4; }

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