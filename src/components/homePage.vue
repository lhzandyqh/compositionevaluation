<template>
    <div class="app-container">
<!--      <h1>这是新的首页</h1>-->
      <el-container style="width: 100%">
        <el-header height="80px">
          <el-row>
            <el-col :span="4" :offset="4">
              <div class="logo_container">
                <el-image
                  style="width: 162px; height: 42px"
                  :src=logo></el-image>
              </div>
            </el-col>
            <el-col :span="2" :offset="12">
              <div class="tubiao-contianer">
                <div class="tubiao">
                  <i class="el-icon-s-data"></i>
                </div>
                <div class="title">
                  <span style="color: dimgrey;cursor: pointer" @click="goCompositionContent">智能测评</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="tubiao-contianer">
                <div class="tubiao">
                  <i class="el-icon-s-custom"></i>
                </div>
                <div class="title">
                  <span v-if="loginFlag==='否'" style="color: dimgrey;cursor: pointer" @click="showLogin">登录</span>
                  <span v-else style="color: dimgrey">我的</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-container>
            <el-aside width="30%">
              <search-section style="padding-top: 20%"></search-section>
            </el-aside>
            <el-main >
              <composition-list></composition-list>
            </el-main>
          </el-container>
        </el-main>
        <el-footer>
          <div class="copyrightContainer">
            <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大数据中心   ©2019</span>
          </div>
        </el-footer>
      </el-container>
      <!-- 登录弹框 -->
      <el-dialog  :visible.sync="showDialog" width="30%">
        <el-form  :model="loginForm" class="login-form" auto-complete="on" label-position="left">
          <el-form-item>
            <el-input
              v-model="loginForm.user_name"
              placeholder="用户名"
              name="user_name"
              type="text"
              auto-complete="on"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              placeholder="密码"
              name="password"
              auto-complete="on"/>
          </el-form-item>
          <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="login">登录</el-button>
        </el-form>
      </el-dialog>
    </div>
</template>

<script>
import {login} from '@/api/login'
import logo from '@/assets/image/logo.png'
import searchSection from '@/components/searchSection'
import compositionList from '@/components/compositionList'
export default {
  name: 'homePage',
  components: { searchSection, compositionList },
  data () {
    return {
      logo: logo,
      showDialog: false,
      loginFlag: '否',
      loginForm: {
        user_name: '',
        password: ''
      }
    }
  },
  mounted () {
    localStorage.setItem('username', 'null')
  },
  methods: {
    showLogin: function () {
      // this.loginFlag = '是'
      this.showDialog = true
      // alert('登录成功')
    },
    login: function () {
      // this.loginFlag = '是'
      // // alert('登录成功')
      // this.showDialog = false
      const prams = {
        username: this.loginForm.user_name,
        password: this.loginForm.password
      }
      login(prams).then(respone => {
        localStorage.setItem('username', respone.data.data)
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 5000
        })
        this.loginFlag = '是'
        // alert('登录成功')
        this.showDialog = false
      })
    },
    goCompositionContent: function () {
      let routeData = this.$router.resolve({ path: '//compositionContent' })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style scoped>
  .logo_container{
    padding-top: 20px;
  }
  .el-icon-s-custom,
  .el-icon-s-data{
    padding-top: 25px;
    font-size: 23px;
  }
  .tubiao-contianer{
    display: inline-block;
  }
  .tubiao{
    display: inline-block;
  }
  .title{
    display: inline-block;
  }
  .el-main{
    background-color: #F5F5F5;
  }
  .copyrightContainer{
    padding-top: 20px;
    text-align: center;
  }
</style>
