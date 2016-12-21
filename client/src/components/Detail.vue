<template>
  <div>
    <hello/>
  </div>
</template>

<script>
let Hello = require('components/Hello')
export default {
  components: {Hello},
  data () {
    return {
      msg: 'Detail....'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
