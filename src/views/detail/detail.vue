<template>
  <div id="detail">
    <detail-nav/>
    <detail-swiper :top-img="topImg"/>
  </div>
</template>

<script>

  import detailNav from './childComponents/detailNavBar'

  import detailSwiper from "./childComponents/detailSwiper";

  import {getDetail,Goods} from "network/detail";
  export default {
    name:'detail',
    components:{
      detailNav,
      detailSwiper,

    },

    data(){
      return{
        iid:null,
        res:null,
        topImg:[],
        goods,
      }
    },
    created(){
      this.iid =this.$route.params.iid
      // 根据id请求详细数据
      getDetail(this.iid).then(res =>{
        console.log(res);
        const data = res.result
        // 轮播图数据
        this.topImg=data.itemInfo.topImages;
        // 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
