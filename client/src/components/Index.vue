<template>
  <div>
    <hello/>
    <list/>
  </div>
</template>
<script>
  let Hello = require('components/Hello')
  let List = require('components/List')
  export default {
    name: 'index',
    components: {Hello, List}
  }
</script>
<style lang="stylus" scoped>
  
      
</style>