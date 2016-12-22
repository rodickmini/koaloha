<template>
  <div class="article-list">
    <section class="section" v-for="article in articleList">
      <div class="content">
        <h1>
          <router-link to="/detail">{{article.title}}</router-link>
          <span class="katime" :title="article.htime">{{article.katime}}</span>
        </h1>
        <p>{{article.abstract}}</p>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'list',
    data () {
    return {
      articleList: []
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
      .katime
        font-size 12px
        color #bbb
        font-weight normal
    p
      margin-top 0
      letter-spacing 1px
</style>