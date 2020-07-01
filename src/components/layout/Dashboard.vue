<!--模版框架-->
<template>
  <el-container>
    <el-header>
      <Navbar/>
    </el-header>
    <el-container style="width: 100%;height: 100%">
      <el-aside>
        <Sidebar/>
      </el-aside>
      <el-main>
        <AppMain/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入组件文件
import Navbar from '@/components/layout/NavBar'
import AppMain from '@/components/layout/AppMain'
import Sidebar from '@/components/layout/SideBar'

export default {
  name: 'DashBoard',
  // 使用组件
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-header {
    padding: 0;
    width: 100%;
  }

  .el-main {
    padding: 0;
    margin-right: 10%;
    margin-left: 10%;
    overflow-x: hidden;
    overflow-y: hidden;
    border-right: 1px solid #ebeef5;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-aside {
    width: 20%;
    border-right: 1px solid #ebeef5;
  }
</style>
