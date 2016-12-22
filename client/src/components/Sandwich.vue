<template>
  <div class="sw-container">
    <a href="javascript:;" class="sandwich">&#9776;</a>
    <ul>
      <li>
        <router-link to="/write">Write</router-link>
      </li>
      <li>
        <a href="javascript:;" @click="rmStorage">Sign out</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sandwich',
  methods: {
    rmStorage: function() {
      localStorage.removeItem('koaloha_token')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import 'nib'
@import '../assets/stylus/variables'
.sw-container
  fixed top 10px right 40px
  a.sandwich
    font-size 30px
    padding 4px
    color $themeColor
    background #fff
    border 1px solid transparent
  ul
    display none
    absolute top 43px right 0
    margin 0
    width 60px
    border 1px solid #efefef
    padding 25px
    box-shadow 0 1px 3px 0 #eee
    li
      list-style none
      text-align right
  &:hover
    a.sandwich
      relative()
      z-index 1
      border 1px solid #efefef
      border-bottom none
    ul
      display block
  
      
</style>