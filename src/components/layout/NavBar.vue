<!--顶部导航栏-->
<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="#000000" active-text-color="#ffffff" router>
    <div class="logo">
      <el-image :src="logoUrl" fit="none"></el-image>
    </div>
    <el-menu-item v-for="item in menuData" :key="item.id" :index="item.value">{{ item.text }}</el-menu-item>
    <el-image :src="titleImgUrl" fit="none" style="float: left"></el-image>
    <div class="title">
      <span>个人博客</span>
    </div>
    <el-menu-item class="signIn" index="signIn">登录</el-menu-item>
    <el-menu-item class="signUp" index="signUp">注册</el-menu-item>
    <div class="nav_search">
      <el-input prefix-icon="el-icon-search" placeholder="站内搜索"
                @focus="searchFocus($event)" @blur="searchBlur($event)">
      </el-input>
    </div>
  </el-menu>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuData: [],
      titleImgUrl: require('@/assets/images/sword_soul.jpg'),
      logoUrl: require('@/assets/images/github.png')
    }
  },
  created: function () {
    this.axios.get('/core/menu/type/navbar').then(result => {
      this.menuData = result.data
    })
  },
  methods: {
    searchFocus($event) {
      $event.target.style.width = '100%'
    },
    searchBlur($event) {
      $event.target.style.width = '80%'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
/*图标 - 文字*/
.navbar_icon {
  vertical-align: middle;
  position: static;
  display: inline;
  font-size: 25px;
  line-height: 50px;
  float: left;
  margin-left: 30px;
  margin-right: 15px;
  pointer-events: none;
  color: #ffffff;
}

/* 菜单高度 */
.el-menu {
  height: 50px;
  padding-left: 15%;
  padding-right: 15%;

  .signIn, .signUp {
    float: right;
  }

  /*搜索框*/
  .nav_search {
    width: 20%;
    margin-left: 15px;
    margin-right: 15px;
    line-height: 50px;
    float: right;
    border: none;
    outline: none;
  }

  .logo {
    float: left;
    width: 32px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }

  .title {
    vertical-align: middle;
    float: left;
    color: #ffffff;
    outline: none;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  ::v-deep .el-input__inner {
    width: 80%;
    height: 28px;
    transition: 2s;
    border: none;
  }
}

.el-menu--horizontal {
  > .el-menu-item {
    height: 50px;
    line-height: 50px;
    border-bottom: none;
    color: #C8C9CB;
  }

  /* 取消下边框 */
  > .el-menu-item.is-active {
    border-bottom: none;
  }

  .el-menu-item:not(.is-disabled):focus, .el-menu-item:not(.is-disabled):hover {
    color: #ffffff;
  }

  /* 取消焦点边框 */
  .el-image {
    outline: none;
  }
}
</style>
