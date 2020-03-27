<template>
  <tab-bar>
    <tab-bar-item path="/home" change-color="orange">
      <img slot="item-icon" src="~assets/img/tabbara/home_huaban.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbara/shouye.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/message" change-color="orange">
      <img slot="item-icon" src="~assets/img/tabbara/matter_.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbara/wendangdingdan.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/users" change-color="orange">
      <img slot="item-icon" src="~assets/img/tabbara/personal_center_huaban.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbara/wode.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" change-color="orange">
      <img slot="item-icon" src="~assets/img/tabbara/more_.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbara/fenlei.svg" alt="">
      <div slot="item-text">更多</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcat" change-color="orange">
      <img slot="item-icon" src="~assets/img/tabbara/more_.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbara/fenlei.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/tabbar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
        name: "maintabbar",
    components:{
      TabBar,
      TabBarItem,
    }
    }
</script>

<style scoped>

</style>
