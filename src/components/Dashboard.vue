<template>
  <div class="parent">
    <div class="top">
      <TopNav />
    </div>
    <div class="left">
      <Sidebar />
    </div>
    <div class="center">
      <div id="content"></div>
    </div>
    <div class="right">
      <Chat />
    </div>
  </div>
</template>

<script>
import TopNav from './TopNav'
import Sidebar from './Sidebar'
import Chat from './Chat'

export default {
  name: 'Dashboard',
  components: {
    TopNav, Sidebar, Chat
  },
  methods: {

  }
}
</script>

<style>
.parent {
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;
  grid-template-rows: 64px 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.top { grid-area: 1 / 1 / 2 / 6; }
.left { grid-area: 2 / 1 / 6 / 2; }
.center { grid-area: 2 / 2 / 6 / 3; }
.right { grid-area: 2 / 3 / 6 / 4; }
</style>