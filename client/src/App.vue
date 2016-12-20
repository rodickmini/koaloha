<template>
  <div id="app">
    <router-view></router-view>
    <footer class="copyright">&copy; koaloha</footer>
  </div>
</template>

<script>
require('normalize.css/normalize.css')
require('assets/stylus/reset.styl')
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
#app
  min-height 100%
  background white
  overflow-y scroll
  overflow-x hidden
  font 14px/1.5 sans-serif
  color #666
  -webkit-font-smoothing antialiased
  .copyright
    padding 100px
    text-align center
</style>
