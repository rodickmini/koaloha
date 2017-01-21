<template>
  <div>
    <hello/>
    <div class="write-container" v-bind:class="{fullscreen: isFullscreen}">
      <span class="toggle-fs-btn" :title="fullScreenTitle" @click="fullscreen" v-html="fullScreenIcon"></span>
      <textarea class="write-space" v-model="inputContent"></textarea>
      <div class="result-space" v-html="outputContent"></div>
    </div>
  </div>
</template>
<script>
  let Hello = require('components/Hello')
  let marked = require('marked')
  require('../assets/stylus/markdown.styl')
  let _ = require('lodash')
  let defaultContent = '# write article title here\n\n> write article abstract here\n\nwrite content after...'
  import articleService from "../services/article"
  export default {
    name: 'write',
    components: {Hello},
    data() {
      return {
        inputContent: defaultContent,
        isFullscreen: false,
        articleInfo: {}
      }
    },
    mounted() {
      setTimeout(() => {
        this.fullscreen()
      }, 500)
    },
    computed: {
      outputContent: function() {
        return marked(this.inputContent)
      },
      fullScreenIcon: function() {
        return this.isFullscreen ? '><' : '<>'
      },
      fullScreenTitle: function() {
        return this.isFullscreen ? 'dock to bottom' : 'full screen'
      }
    },
    methods: {
      fullscreen: function() {
        this.isFullscreen = !this.isFullscreen
      },
      save: function() {
        let self = this
        if(!this.articleInfo._id) {//create
          articleService.addOne(
            this.articleInfo.title, this.articleInfo.abstract, this.articleInfo.content).then((r) => {
            if(r.code === 0) {
              self.articleInfo._id = r.data._id
              console.log('saved!')
            }
          }).catch((err) => {
            alert(err.err_msg)
          })
        }else {//update
          articleService.update(this.articleInfo._id, 
            this.articleInfo.title, this.articleInfo.abstract, this.articleInfo.content).then((r) => {
            if(r.code === 0) {
              console.log('updated!')
            }
          }).catch((err) => {
            alert(err.err_msg)
          })
        }
        
      }
    },
    beforeRouteEnter: (to, from, next) => {//fetch article data before route enter
      if(to.params.id) {
        let articleId = to.params.id
        articleService.getDetail(articleId).then((r) => {
          if(r.code === 0) {
            next(vm => {
              vm.articleInfo = r.data.article
              vm.inputContent = r.data.article.content
            })
          }else {
            alert('get article info failed')
            next(false)
          }
        }).catch((err) => {
          alert(err.err_msg)
          next(false)
        })
      }else {
        next(vm => {
          vm.articleInfo = {}
          vm.inputContent = defaultContent
          vm.isFullscreen = false
        })
      }
    },
    watch: {
      inputContent: _.debounce(function() {
        let title, abstract, content = this.inputContent
        if(content) {//文章内容为空不保存
          title = content.match(/#.*\n/)//匹配第一个“以#开头后面跟任意字符，以\n结尾”的字符串作为标题
          console.log('title\n', title)
          title = title ? title[0].replace(/^#*\s*|\s*$/, '') : 'default title'//!fixme:匹配首尾 ###
          
          abstract = content.match(/>.*\n/)//匹配第一个“以>开头后面跟任意字符，以\n结尾”的字符串作为摘要，如果匹配失败则返回null
          if(abstract) {
            let cleanAbstract = abstract[0].replace(/^>\s*/, '')
            abstract = cleanAbstract === '' ? 'default abstract' : cleanAbstract
          }else {
            abstract = 'default abstract'
          }

          this.articleInfo.title = title
          this.articleInfo.abstract = abstract
          this.articleInfo.content = content

          this.save()//每1000ms自动保存
        }
      }, 1000)
    }
  }
</script>
<style lang="stylus" scoped>
@import 'nib'
@import '../assets/stylus/variables.styl'
.write-container
  clearfix()
  fixed top 280px right 0 bottom 0 left 0
  z-index 1
  transition: all .6s ease
  &.fullscreen
    fixed top 0 right 0 bottom 0 left 0
  .write-space
    box-sizing border-box
    float left
    width 50%
    height 100%
    padding 10px
    background-color rgba(25, 25, 25, .98)
    color #ccc
    outline none
    border none
    resize none
  .result-space
    box-sizing border-box
    width 50%
    height 100%
    overflow auto
    float left
    padding 10px
    background-color #f1f1f1
  .toggle-fs-btn
    absolute top 0 right 50%
    padding 0 10px
    color $themeColor
    font-size 22px
    cursor pointer
    transform rotate(90deg)
</style>