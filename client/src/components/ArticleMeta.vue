<template>
  <span class="article-meta">{{author}}·<span :title="new Date(+timestamp)">{{+timestamp | nicedate}}</span></span>
</template>
<script>
export default {
  name: 'article-meta',
  props: [
    'author', 'timestamp'
  ],
  filters: {
    nicedate: function(value) {
      //ref: https://github.com/ssbc/nicedate
      let nicedate = require('nicedate')
      try {//这个地方如果不try catch，nicedate“有时”会throw error，但其实已经返回了正确结果
        return nicedate(value, true, 'zh')
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.article-meta
  font-size 12px
  color #aaa
  font-weight normal
</style>