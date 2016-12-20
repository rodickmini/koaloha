<template>
  <div>
    <section class="section" v-for="article in articleList">
      <div class="content">
        <h1>
          <a href="">{{article.title}}</a>
          <span class="katime" :title="article.htime">{{article.katime}}</span>
        </h1>
        <p>{{article.intro}}</p>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'list',
    data () {
    return {
      articleList: [
        {
          title: '浅谈JS原型链',
          intro: 'JavaScript是一门基于原型继承的语言 ——Douglas Crockford 函数的prototype属性 JS中的函数有一个属性prototype，指向其原型对象，其它类型的变量不存在该属性。 var a = 1, str = "中国", flag = true, obj = {}, func =',
          katime: '30分钟前',
          htime: '2016年12月20日 14:00'
        },{
          title: 'TYPEOF操作符', 
          intro: 'JS中，typeof操作符返回一个字符串，表明typeof 后面操作数的类型 // Numbers typeof 37 === \'number\'; typeof 3.14 === \'number\'; typeof Math.LN2 === \'number\'; typeof Infinity === \'number\';',
          katime: '1天前',
          htime: '2016年12月20日 14:00'
        },{
          title: '外边距折叠 MARGIN COLLAPSE', 
          intro: '普通流中的两个或多个毗邻的块级元素垂直方向上的margin会折叠，实际外边距为两者margin中的较大值 注意：这个现象并不是一个问题或者一个bug，只不过这种现象和很多人想当然的结果不一样而已。 所谓“毗邻”有以下3种情况',
          katime: '2天前',
          htime: '2016年12月20日 14:00'
        },{
          title: '左右定宽中间自适应3栏布局', 
          intro: '总结了4种“左右固定中间自适应的3栏布局”，强烈参考了张鑫旭的博客 1.左侧左浮动，右侧右浮动 左侧左浮动，右侧右浮动，中间div设置左右margin、宽度自适应，中间一栏必须放在最后 <style> html, body {margin: 0; padding: 0; height: 100%;} ',
          katime: '10天前',
          htime: '2016年12月20日 14:00'
        }
      ]
    }
  }
  }
</script>
<style lang="stylus" scoped>
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