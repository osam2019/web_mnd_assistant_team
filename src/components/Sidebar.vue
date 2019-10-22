<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1" @click="isCollapse = !isCollapse">
        <font-awesome-icon icon="bars" />
        <span slot="title" class="rs">열기/닫기</span>
      </el-menu-item>

      <el-menu-item index="2"
        @click="$router.push('/dashboard/emails')">

        <font-awesome-icon icon="envelope" />
        <span slot="title" class="rs">메일</span>
      </el-menu-item>

      <el-menu-item index="3"
        @click="$router.push('/dashboard/contacts')">
        <font-awesome-icon icon="user" />
        <span slot="title" class="rs">주소록</span>
      </el-menu-item>

      <el-menu-item index="4"
        @click="$router.push('/dashboard/calendar')">
        <font-awesome-icon icon="calendar" />
        <span slot="title" class="rs">일정 관리</span>
      </el-menu-item>

      <el-menu-item index="5"
        @click="$router.push('/dashboard/settings')">
        <font-awesome-icon icon="cog" />
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
      unread_emails: 12
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
  margin-left: 16px;
  font-weight: bolder;
}
.el-menu-item {
  text-align: left;
  text-decoration: none;
}
</style>