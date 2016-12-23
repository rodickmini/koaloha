<template>
  <div class="article-list">
    <section class="section" v-for="article in articleList">
      <div class="content">
        <h1>
          <router-link :to="'/detail/' + article._id">{{article.title}}</router-link>
          <article-meta :author="article.author" :timestamp="article.createTime"></article-meta>
        </h1>
        <p v-html="article.abstract_marked"></p>
      </div>
    </section>
    <div class="loadmore-container" v-show="!nomore">
      <button class="btn-loadmore" @click="loadmore">loadmore</button>
    </div>
    <div class="loadmore-container" v-show="nomore">
      <button class="btn-loadmore" disabled>no more articles</button>
    </div>
  </div>
</template>
<script>
  import articleService from "../services/article"
  let ArticleMeta = require('components/ArticleMeta')
  let marked = require('marked')
  const ARTICLES_PER_PAGE = 10
  export default {
    name: 'list',
    components: {ArticleMeta},
    data () {
      return {
        articleList: [],
        nomore: false
      }
    },
    created () {
      articleService.getList({
        start: 0, limit: ARTICLES_PER_PAGE
      }).then((r) => {
        if(r.code === 0) {
          this.articleList = r.data.articles.map((articleObj) => {
            articleObj.abstract_marked = marked(articleObj.abstract)
            return articleObj
          })
        }
      }).catch((err) => {
        alert(err.err_msg)
      })
    },
    methods: {
      loadmore: function() {
        articleService.getList({
          start: this.articleList.length, limit: ARTICLES_PER_PAGE
        }).then((r) => {
          if(r.code === 0) {
            if(r.data.articles.length > 0) {
              this.articleList = this.articleList.concat( r.data.articles.map((articleObj) => {
                articleObj.abstract_marked = marked(articleObj.abstract)
                return articleObj
              }) )
            }else {
              this.nomore = true
            }
          }
        }).catch((err) => {
          alert(err.err_msg)
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/variables'
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
    p
      margin-top 0
      letter-spacing 1px
.loadmore-container
  margin-top 30px
  text-align center
  .btn-loadmore
    padding 10px
    border none
    outline none
    background-color $themeColor
    color white
    cursor pointer
    &[disabled]
      background-color #bbb
      cursor default
</style>