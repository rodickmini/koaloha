<template>
  <div>
    <hello/>
  </div>
</template>

<script>
let Hello = require('components/Hello')
export default {
  name: 'detail',
  components: {Hello},
  data () {
    return {

    }
  },
  created() {
    let articleId = this.$route.params.id
  }
}
</script>

<style lang="stylus" scoped>

</style>
