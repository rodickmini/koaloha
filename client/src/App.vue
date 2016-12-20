<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('normalize.css/normalize.css')
require('assets/stylus/reset.styl')
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  height: 100%;
  background: white;
  overflow-y: scroll;
  overflow-x: hidden;
  font: 17px/1.5 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
  color: #2c3e50;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  margin: 0 auto;
  max-width: 750px;
  text-align: left;
}
</style>
