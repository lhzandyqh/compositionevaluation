<template>
  <div class="app-container">
    <div class="lowin lowin-red">
      <div class="lowin-brand">
        <img src="./images/kodinger.jpg" alt="logo">
      </div>
      <div class="lowin-wrapper">
        <div class="lowin-box lowin-login">
          <div class="lowin-box-inner">
            <form  class="l-form"  action="/login">
              <p>登录</p>
              <div class="lowin-group">
                <label>用户名 <a href="#" class="login-back-link">Sign in?</a></label>
                <input id="login-username" type="text" autocomplete="username" name="username" class="lowin-input">
              </div>
              <p id="p-error-1" hidden='true' style="color: red; font-size: 12px">用户名为6-20位字符</p>
              <div class="lowin-group password-group">
                <label>密码</label>
                <input type="password" id="login-pwd" name="password" autocomplete="current-password" class="lowin-input">
              </div>
              <p id="p-error-2" hidden='true' style="color: red; font-size: 12px">密码为6-20位字符</p>
              <button class="lowin-btn login-btn" id="lButton" disabled='true' style="background-color: #ff8888" type="button">
                登录
              </button>
              <div class="text-foot">
                Don't have an account? <a href="" class="register-link">注册</a>
              </div>
            </form>
          </div>
        </div>

        <div class="lowin-box lowin-register">
          <div class="lowin-box-inner">
            <form class="c-form" action="/register">
              <p>创建账户</p>
              <div class="lowin-group">
                <label>用户名</label>
                <input type="text" name="name" autocomplete="name" class="lowin-input" id="ct-user">
              </div>
              <p id="p-error-3" hidden='true' style="color: red;font-size:12px">用户名为6-20位字符</p>
              <div class="lowin-group">
                <label>密码</label>
                <input type="password" name="password" autocomplete="current-password" class="lowin-input" id="ct-pwd">
              </div>
              <p id="p-error-4" hidden='true' style="color: red;font-size:12px">密码为6-20位字符</p>
              <button class="lowin-btn" id="cButton" disabled='true' style="background-color: #ff8888" type="button">
                创建
              </button>
              <div class="text-foot">
                Already have an account? <a href="" class="login-link">登录</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer class="lowin-footer">
        Design By <a href="http://fb.me/itskodinger">@itskodinger</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage'
}
</script>

<style scoped>

</style>
