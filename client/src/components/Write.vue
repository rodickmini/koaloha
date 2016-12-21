<template>
  <div>
    <hello/>
    <div class="write-container">
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
      }
    },
    computed: {
      outputContent: function() {
        return marked(this.inputContent)
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import 'nib'
.write-container
  height 500px
  clearfix()
  relative()
  z-index 1
  .write-space
    box-sizing border-box
    float left
    width 50%
    height 100%
    padding 10px
    background-color #2d2d2d
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
</style>