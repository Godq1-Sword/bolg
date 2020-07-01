<!--顶部导航栏-->
<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    router>
    <div class="navbar_icon">
      <i class="el-icon-apple"></i>
    </div>
    <el-menu-item index="rocketmq">消息订阅</el-menu-item>
<!--    <el-submenu index="2">-->
<!--      <template slot="title">消息订阅</template>-->
<!--      <el-menu-item index="2-1">剑魂</el-menu-item>-->
<!--    </el-submenu>-->
    <div class="nav_search">
      <el-input></el-input>
    </div>
    <el-menu-item index="CalComp">伤害对比</el-menu-item>
    <el-menu-item index="CalRank">装备排名</el-menu-item>
    <el-menu-item index="1">史诗仓库</el-menu-item>
    <el-menu-item index="">退出</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      // bolgIcon: require('@/assets/images/101.png')
    }
  },
  methods: {}
}
</script>
<style rel="stylesheet/scss" xml:lang="scss" scoped>
  .navbar_icon {
    vertical-align: middle;
    position: static;
    display: inline;
    font-size: 30px;
    line-height: 60px;
    float: left;
    margin-left: 30px;
    margin-right: 15px;
    pointer-events: none
    /*position: static;*/
    /*height: 53px;*/
    /*width: 100%;*/
    /*vertical-align: center;*/
    /*background-color: #24292e;*/
    /*border-bottom: 1px solid #ebeef5;*/
  }

  .nav_search {
    width: 15%;
    line-height: 60px;
    float: left;
  }
</style>
