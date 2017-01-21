<template>
  <div class="article-widget">
    <span>阅读{{readCount}}次 · 评论{{commentCount}}次</span>
    <span class="dynamic-actions" v-show="masterPrivilege"> · 
      <router-link :to="'/edit/' + id">编辑</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: 'article-widget',
  props: [
    'id', 'readCount', 'commentCount', 'masterPrivilege'
  ]
}
</script>
<style lang="stylus" scoped>
.article-widget
  font-size 13px
  color #aaa
  font-weight normal
  .dynamic-actions
    opacity 0
    transition all .6s
.content:hover
  .dynamic-actions
    opacity 1
</style>