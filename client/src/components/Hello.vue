<template>
  <section id="top" class="section">
    <div class="container">
      <div id="logo" class="logo">{{siteName}}</div>
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
  .container
    text-align center
    padding 100px
  .logo
    font-size 100px
    color #333
    text-transform lowercase
</style>
