<template>
  <transition name="el-fade-in-linear">
    <div class="parent">
      <div class="top">
        <TopNav />
      </div>
      <div class="left">
        <Sidebar />
      </div>
      <div class="center">
        <el-collapse-transition>
          <router-view />
        </el-collapse-transition>
      </div>
      <div class="right">
        <ChatScreen />
      </div>
    </div>
  </transition>
</template>

<script>
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'
import ChatScreen from '../components/ChatScreen'

export default {
  name: 'Dashboard',
  components: {
    TopNav, Sidebar, ChatScreen
  },
  methods: {

  }
}



</script>

<style>
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
</style>