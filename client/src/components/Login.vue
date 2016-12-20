<template>
  <div>
    <hello/>
    <form class="login-form">
      <div class="form-control">
        <input type="text" name="username" placeholder="username">
      </div>
      <div class="form-control">
        <input type="password" name="password" placeholder="password">
      </div>
      <div class="form-control">
        <button type="submit" class="btn">Sign in</button>
      </div>
    </form>
  </div>
</template>
<script>
  let Hello = require('components/Hello')
  export default {
    name: 'login',
    components: {Hello}
  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/variables'
  .login-form
    width 300px
    margin 0 auto
    .form-control
      margin-bottom 10px
    input
      width 100%
      padding 1em .8em
      box-sizing border-box
      border-top none
      border-right none
      border-bottom 1px solid $themeColor
      border-left none
      outline none
    button.btn[type="submit"]
      width 100%
      font-size 1.4em
      border none
      background-color $themeColor
      color white
      margin-top 20px
      padding .5em
      
</style>