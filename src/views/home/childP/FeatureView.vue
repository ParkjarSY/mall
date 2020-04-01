<!--本周流行-->
<template>
    <div class="feature">
      <a href="#">
        <img src="#" alt="">
        <h2>本周流行</h2>
        <h1>这是一张每日推荐图片</h1>
        <h3>建议使用手机浏览</h3>
      </a>
    </div>
</template>

<script>
    export default {
      name: "FeatureView",
      props:{

      }
    }
</script>

<style scoped>
  .feature{
    background:linear-gradient(to bottom,#FFAFBD,#ffc3a0);
    width: 100%;
    height: 200px;
    text-align: center;
  }
</style>
