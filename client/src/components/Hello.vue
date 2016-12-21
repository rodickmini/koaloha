<template>
  <section id="top" class="section">
    <div class="container">
      <router-link to="/">
        <div id="logo" class="logo">{{siteName}}</div>
      </router-link>
      <div id="intro" class="intro">{{siteIntro}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
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
