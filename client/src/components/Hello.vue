<template>
  <section id="top" class="section">
    <sandwich></sandwich>
    <div class="container">
        <div id="logo" class="logo">
          <router-link to="/">{{siteName}}</router-link>
        </div>
      <div id="intro" class="intro">{{siteIntro}}</div>
    </div>
  </section>
</template>

<script>
let Sandwich = require('components/Sandwich')
export default {
  name: 'hello',
  components: {Sandwich},
  data () {
    return {
      siteName: 'koaloha',
      siteIntro: 'A blog generating system based on Koa.js and Vue.js'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variables'
  .container
    text-align center
    padding 100px
  .logo
    font-size 100px
    font-family san-serif
    color $themeColor
    text-transform lowercase
</style>
