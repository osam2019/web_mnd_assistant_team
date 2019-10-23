<template>
  <div>
    <el-menu 
      :default-active="activeLink" 
      class="el-menu-vertical-demo" 
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true">

      <el-menu-item
        @click="isCollapse = !isCollapse">
        <font-awesome-icon icon="bars" size="2x"/>
        <span slot="title" class="rs"></span>
      </el-menu-item>

      <el-menu-item index="/dashboard/emails">
        <font-awesome-icon icon="envelope" size="2x"/>
        <span slot="title" class="rs">메일</span>
      </el-menu-item>

      <el-menu-item index="/dashboard/contacts">
        <font-awesome-icon icon="address-card" size="2x" />
        <span slot="title" class="rs">주소록</span>
      </el-menu-item>

      <el-menu-item index="/dashboard/calendar">
        <font-awesome-icon icon="calendar" size="2x" />
        <span slot="title" class="rs">일정 관리</span>
      </el-menu-item>

      <el-menu-item index="/dashboard/reservation">
        <font-awesome-icon icon="clipboard-check" size="2x"/>
        <span slot="title" class="rs">예약하기</span>
      </el-menu-item>

      <el-menu-item index="/dashboard/settings">
        <font-awesome-icon icon="cog" size="2x"/>
        <span slot="title" class="rs">설정</span>
      </el-menu-item>

      
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data(){
    return {
      isCollapse: false,
      activeLink: '/dashboard/emails',
      unread_emails: 12
    }
  },
  watch: {
    $route (to, from) {
      this.activeLink = to.path
    }
  },
  methods: {
    handleOpen(key, keyPath){
      console.log(key, keyPath);
    },
    handleClose(key, keyPath){
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 600px;
}
.rs {
  font-family: 'S-CoreDream-8Heavy';
  font-size: 15pt;
  font-weight: bolder;
}
li.el-menu-item {
  text-align: left;
  text-decoration: none;
}
li.el-menu-item * {
  color: #606467;
}
svg {
  min-width: 30px;
  margin-right: 16px;
}
</style>