<template>
  <div class="article-list">
    <section class="section" v-for="article in articleList">
      <div class="content">
        <h1>
          <router-link :to="'/detail/' + article._id">{{article.title}}</router-link>
          <span class="article-meta">{{article.author}} 写于 <span :title="new Date(+article.createTime)">{{+article.createTime | nicedate}}</span></span>
        </h1>
        <p>{{article.abstract}}</p>
      </div>
    </section>
  </div>
</template>
<script>
  import articleService from "../services/article"
  export default {
    name: 'list',
    data () {
      return {
        articleList: []
      }
    },
    created () {
      articleService.getList({
        start: 0, limit: 10
      }).then((r) => {
        if(r.code === 0) {
          this.articleList = r.data.articles
        }
      }).catch((err) => {
        alert(err.err_msg)
      })
    },
    filters: {
      nicedate: function(value) {
        //ref: https://github.com/ssbc/nicedate
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
.article-list
  margin-bottom 300px
.section:not(#top)
  padding 30px 100px 0
  text-align center
  .content
    margin 0 auto
    max-width 750px
    text-align left
    h1
      font-size 1.5em
      margin-bottom 0
      letter-spacing 2px
      .article-meta
        font-size 12px
        color #aaa
        font-weight normal
    p
      margin-top 0
      letter-spacing 1px
</style>