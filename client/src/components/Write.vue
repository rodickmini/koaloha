<template>
  <div>
    <hello/>
    <div class="write-container" v-bind:class="{fullscreen: isFullscreen}">
      <span class="toggle-fs-btn" title="full screen" @click="fullscreen" v-html="fullScreenIcon"></span>
      <textarea class="write-space" v-model="inputContent"></textarea>
      <div class="result-space" v-html="outputContent"></div>
    </div>
  </div>
</template>
<script>
  let Hello = require('components/Hello')
  let marked = require('marked')
  require('../assets/stylus/markdown.styl')
  export default {
    name: 'write',
    components: {Hello},
    data() {
      return {
        inputContent: '# markdown here',
        isFullscreen: false
      }
    },
    computed: {
      outputContent: function() {
        return marked(this.inputContent)
      },
      fullScreenIcon: function() {
        return this.isFullscreen ? '><' : '<>'
      }
    },
    methods: {
      fullscreen: function() {
        this.isFullscreen = !this.isFullscreen
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import 'nib'
@import '../assets/stylus/variables.styl'
.write-container
  clearfix()
  fixed top 280px right 0 bottom 0 left 0
  z-index 1
  transition: all .6s ease
  &.fullscreen
    fixed top 0 right 0 bottom 0 left 0
  .write-space
    box-sizing border-box
    float left
    width 50%
    height 100%
    padding 10px
    background-color rgba(25, 25, 25, .98)
    color #ccc
    outline none
    border none
    resize none
  .result-space
    box-sizing border-box
    width 50%
    height 100%
    overflow auto
    float left
    padding 10px
    background-color #f1f1f1
  .toggle-fs-btn
    absolute top 0 right 50%
    padding 0 10px
    color $themeColor
    font-size 30px
    cursor pointer
    transform rotate(90deg)
</style>