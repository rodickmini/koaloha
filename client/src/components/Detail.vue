<template>
  <div>
    <hello/>
    <div class="article-detail">
      <div class="article-meta">
        <span>{{article.author}} 写于 <span :title="new Date(+article.createTime)">{{+article.createTime | nicedate}}</span></span>
      </div>
      <div class="content" v-html="articleMarked"></div>
    </div>
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
  },
  filters: {
    nicedate: function(value) {
      let nicedate = require('nicedate')
      try {
        return nicedate(value, true, 'zh')
      }catch (e) {
        console.log(e)
      }
    }
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
