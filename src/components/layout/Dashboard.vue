<!--模版框架-->
<template>
  <el-container>
    <el-header height="50px">
      <NavBar/>
    </el-header>
    <el-container class="container_body">
      <el-aside width="200px">
        <el-scrollbar>
          <SideBar/>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar>
          <Main/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入组件文件
import NavBar from '@/components/layout/NavBar'
import Main from '@/components/layout/Main'
import SideBar from '@/components/layout/SideBar'

export default {
  name: 'Dashboard',
  // 使用组件
  components: {
    SideBar,
    NavBar,
    Main
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-container {
  overflow-y: hidden;
  background-color: #ffffff;

  /* Header */
  .el-header {
    padding: 0;
    width: 100%;
    top: 0;
    position: absolute;
    z-index: 5;
  }

  /* 主体 */
  .container_body {
    width: 100%;
    margin-top: 50px;
    z-index: 2;
    padding-left: 15%;

    /* Main */
    .el-main {
      z-index: 3;
    }

    /* 侧栏 */
    .el-aside {
      padding-top: 20px;
      bottom: 0;
      z-index: 4;
      height: auto;
      min-height: 100%;
    }
  }
}

/*滚动条*/
.el-scrollbar {
  height: 100%;
}

/*隐藏横向滚动条*/
::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
