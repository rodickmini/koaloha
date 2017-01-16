<template>
  <div class="article-list">
    <div class="section" v-show="articleList.length === 0">
      <router-link class="btn" :to="'/write'">write your first article</router-link>
    </div>
    <section class="section" v-for="article in articleList">
      <div class="content">
        <h1>
          <router-link :to="'/detail/' + article._id">{{article.title}}</router-link>
          <article-meta :author="article.author" :timestamp="article.createTime"></article-meta>
        </h1>
        <p v-html="article.abstract_marked"></p>
        <article-widget :id="article._id" :read-count="96" :comment-count="38"></article-widget>
      </div>
    </section>
    <div class="loadmore-container" v-show="!nomore">
      <button class="btn btn-loadmore" @click="loadmore">loadmore</button>
    </div>
  </div>
</template>
<script>
  import articleService from "../services/article"
  let ArticleMeta = require('components/ArticleMeta')
  let ArticleWidget = require('components/ArticleWidget')
  let marked = require('marked')
  const ARTICLES_PER_PAGE = 10
  export default {
    name: 'list',
    components: {ArticleMeta, ArticleWidget},
    data () {
      return {
        articleList: [],
        nomore: true
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
          if(this.articleList.length === 0) {
            this.nomore = true
          }else {
            this.nomore = false
          }
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
      letter-spacing 1px
    
.loadmore-container
  margin-top 30px
  text-align center
.btn
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