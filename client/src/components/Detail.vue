<template>
  <div>
    <hello/>
    <div class="content" v-html="articleMarked"></div>
  </div>
</template>

<script>
let Hello = require('components/Hello')
let marked = require('marked')
import articleService from "../services/article"
export default {
  name: 'detail',
  components: {Hello},
  data () {
    return {
      articleMarked: ''
    }
  },
  created() {
    let articleId = this.$route.params.id
    articleService.getDetail(articleId).then((r) => {
      if(r.code === 0) {
        this.articleMarked = marked(r.data.article.content)
      }
    }).catch((err) => {
      alert(err.err_msg)
    })
  }
}
</script>

<style lang="stylus" scoped>
.content
  margin 0 auto 230px
  max-width 750px
  text-align left
</style>
