<template>
  <div>
    <hello/>
    <div class="article-detail">
      <article-meta :author="article.author" :timestamp="article.createTime"></article-meta>
      <div class="content" v-html="articleMarked"></div>
    </div>
  </div>
</template>

<script>
let Hello = require('components/Hello')
let ArticleMeta = require('components/ArticleMeta')
let marked = require('marked')
import articleService from "../services/article"
export default {
  name: 'detail',
  components: {Hello, ArticleMeta},
  data () {
    return {
      article: '',
      articleMarked: ''
    }
  },
  created() {
    let articleId = this.$route.params.id
    articleService.getDetail(articleId).then((r) => {
      if(r.code === 0) {
        this.article = r.data.article
        this.articleMarked = marked(r.data.article.content)
      }
    }).catch((err) => {
      alert(err.err_msg)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import 'nib'
.article-detail
  relative()
  margin 0 auto 230px
  max-width 750px
  text-align left
  &:hover
    .article-meta
      opacity 1

.article-meta
  absolute right 0
  line-height 42px
  font-size 12px
  color #aaa
  opacity 0
  transition all .6s
</style>
