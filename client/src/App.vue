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
  position relative
  min-height 100%
  background white
  overflow-y scroll
  overflow-x hidden
  .copyright
    position absolute
    bottom 0
    left 0
    right 0
    padding 100px
    text-align center
</style>
