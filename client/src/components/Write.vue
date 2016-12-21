<template>
  <div>
    <hello/>
    <div class="write-container">
      <textarea class="write-space">#markdown here</textarea>
      <div class="result-space"></div>
    </div>
  </div>
</template>
<script>
  let Hello = require('components/Hello')
  export default {
    name: 'write',
    components: {Hello}
  }
</script>
<style lang="stylus" scoped>
.write-container
  padding 20px
  textarea.write-space
    box-sizing border-box
    float left
    width 50%
    height 500px
    padding 10px
    background-color #2d2d2d
    color #ccc
    outline none
    border none
    resize none
  .result-space
    width 50%
    float left
</style>