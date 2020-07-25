<template>
  <div >
    <div >
      <nav-bar class="home-nav">
        <div slot="left">hello</div>
        <div slot="center">world</div>
        <div slot="right">PJC</div>
      </nav-bar>

    </div>

     <div id="home" >
       <tab-control :titls="['最新','推荐','热门']"
                    @tabClick="tabClick"
                    v-show="tabFixed"
                    ref="tabControl"
                    class="tabControl"/>


     <scroll class="content"
               ref="scroll"
               :probe-type="3"
               @scroll="contentScroll"
               :pull-up-load="true"
               @pullingUp="loadMore"
       >

       <swipe class="my-swipe">
         <swipe-item v-for="i in banners">
           <a :href="i.link">
             <img :src="i.image" alt=""   >
           </a>
         </swipe-item>
       </swipe>
     <recommand :recommends="recommends"/>
     <feature-view/>
     <tab-control :titls="['最新','推荐','热门']"  @tabClick="tabClick"  onload="SimageLoda"/>
     <goods-list :goods="showGoods"/>
   </scroll>
       <!--  加上native才能监听-->
       <back-top @click.native="backClick" v-show="isShow"/>
     </div>
  </div>
</template>

<script>
  import NavBar from'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontroll/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import Recommand from './childP/JCRecommendHome'
  import FeatureView from './childP/FeatureView'
  import { Swipe, SwipeItem } from 'components/common/swiper/index';

  import {debounce} from "components/common/util";

  import {
    getHomeMultiData,
    getHomeGoods,
  } from 'network/home'

  export default {
    name: "home",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      FeatureView,
      Recommand,
      SwipeItem,
      Swipe,
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    data(){
      return {
        banners : [],
        recommends :[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        //默认显示种类
        currentType:'pop',
        isShow : false ,

        LoadTime:true,
        tabOffsetTop:530,
        middleTop:null,
        tabFixed:false,
        saveY:0,
      }
    },
    //生命周期函数
    created() {
      //请求多个数据
     this.getHomeMultiData();
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');
     this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
       //防抖函数的使用
      const refresh = debounce(this.$refs.scroll.refresh(),50);
      //解决上拉加载更多的bug，通过监听图片的加载来调用refresh函数
      
    },
    activated(){//活跃
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
    },
    deactivated(){//不活跃，离开页面
    this.saveY = this.$refs.scroll.getScrollY()
    
    },
    // mounted(){
    // },
    methods:{
     
      //返回顶部,访问组件的scrollTO方法
      backClick(){
        this.$refs.scroll.scrollTo(0,0,600)
      },
      // 事件监听
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';break;
          case 1:
            this.currentType = 'new';break;
          case 2:
            this.currentType = 'sell';break;
        }
      },

      //读取图片位置

      //滚动位置监听
      contentScroll(position){
        //判断backTop是否显示
        this.isShow = -(position.y) > 1500 ? true:false;
        //判断tabControl是否吸顶
        console.log(this.tabOffsetTop);
        //this.middleTop = this.getTabTop();
        this.tabFixed = -(position.y)>this.tabOffsetTop ? true:false
      },
      //上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentType )
        this.$refs.scroll.scroll.refresh()
      },
      getoffsetTop(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        console.log(this.tabOffsetTop);
        console.log("hhh")
      },
      //监听轮播图是否加载完毕

      /*
      * 网络请求
      */
      getHomeMultiData(){
        getHomeMultiData(  ).then( res =>{
          this.banners = res.data.banner.list;
          console.log(this.banners);
          this.recommends = res.data.recommend.list;

        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1

          this.$refs.scroll.finishPullUp()
        })
      },
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #45454d;
    z-index: 9;
    position:fixed;
    left: 0px;
    right: 0px;

  }
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    flex-shrink: 0;
  }
  .my-swipe img {
    width: 100%;
  }
  .tabControl{
    position:fixed;
    left: 0px;
    right: 0px;
    background: #fff;
    z-index: 9;
  }
  .content{
    height: calc(100% - 45px);
  }

</style>
