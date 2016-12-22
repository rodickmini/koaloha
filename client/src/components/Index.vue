<template>
  <div>
    <sandwich></sandwich>
    <hello/>
    <list/>
  </div>
</template>
<script>
  let Sandwich = require('components/Sandwich')
  let Hello = require('components/Hello')
  let List = require('components/List')
  export default {
    name: 'index',
    components: {Sandwich, Hello, List}
  }
</script>
<style lang="stylus" scoped>
  
      
</style>