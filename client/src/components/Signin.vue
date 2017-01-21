<template>
  <div class="wrapper">
    <hello/>
    <form class="signin-form">
      <div class="form-control">
        <input type="text" name="username" placeholder="username" v-model="username">
      </div>
      <div class="form-control">
        <input type="password" name="password" placeholder="password" v-model="password">
      </div>
      <div class="form-control">
        <button type="submit" class="btn" @click.prevent="signin">Sign in</button>
      </div>
    </form>
  </div>
</template>
<script>
  const Hello = require('components/Hello')
  const md5 = require('md5')
  import sessionService from "../services/session"
  export default {
    name: 'signin',
    components: {Hello},
    data: function() {
      return {
        username: '',
        password: '',
        redirect: '/'
      }
    },
    created: function() {
      console.log(this.$router)
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.redirect = to.query.redirect
      })
    },
    methods: {
      signin: function() {
        let self = this
        sessionService.signin(this.username, md5(this.password)).then((r) => {
          if(r.code === 0) {
            let storage = window.localStorage
            storage.setItem('koaloha_token', r.data.token)
            self.$router.push(self.redirect)
          }
        }).catch((err) => {
          console.log(err)
          alert(err.err_msg)
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/variables'
.wrapper
  position relative
  z-index 1
  .signin-form
    width 300px
    margin 0 auto
    background-color white
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
      cursor pointer
      
</style>