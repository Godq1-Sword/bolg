<template>
  <div class="login_warp">
    <div class="login_form">
      <div class="login_logo"><span>Bolg</span></div>
      <template>
        <el-collapse>
          <el-collapse-item>
            <template slot="title">登录<i class="header-icon el-icon-coordinate"></i></template>
            <el-form :model="loginForm" ref="loginForm">
              <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
              <el-input style="margin-top: 10px" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
              <el-form-item label="记住密码">
                <el-switch v-model="loginForm.cookie"></el-switch>
                <el-button class="btn_login" type="text" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">注册<i class="header-icon el-icon-mouse"></i></template>
            <el-form :model="registeForm" ref="loginForm">
              <el-input prefix-icon="el-icon-user-solid" v-model="registeForm.username"></el-input>
              <el-input style="margin-top: 10px" prefix-icon="el-icon-lock" v-model="registeForm.password"></el-input>
              <el-button class="btn_login" type="text">注册</el-button>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        cookie: ''
      },
      registeForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.axios.get('/core/token', {
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(result => {
        console.log(result)
        // this.messageTipTableData = result.data
      }).catch()
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login_warp {
    width: 100%;
    height: 100%;
    background-color: #f6f8fa;
  }

  .login_form {
    width: 420px;
    height: 480px;
    /*border: 1px solid red;*/
    padding: 30px;
    position: absolute;
    /*位移右下50%*/
    left: 50%;
    top: 50%;
    /*自身偏移左上50%*/
    transform: translate(-50%, -50%);
    background-color: #ffffff;
  }

  .login_logo {
    text-align: center;
    margin-bottom: 10px
  }

  span {
    font-size: 22px;
  }

  .btn_login {
    float: right;
  }
</style>
