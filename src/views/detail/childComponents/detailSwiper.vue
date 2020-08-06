<template>
  <swiper class="swiper-item">
    <swipe-item  v-for="(item ,key) in topImg" :key="key">
      <img :src="item" alt="">
    </swipe-item>
  </swiper>
</template>

<script>
  import { Swipe, SwipeItem } from 'components/common/swiper/index';
  export default {
    name: "detailSwiper",
    components:{
      SwipeItem,
      Swipe
    },
    props:{
      topImg:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.swiper-item{
  height: 280px;
  overflow: hidden;
}
</style>
