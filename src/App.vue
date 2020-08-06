<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/maintabbar'

  export default {
    name: 'App',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  /*配置过别名了*/
 @import "assets/css/base.css";
</style>
