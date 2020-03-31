<template>
  <div >
    <div >
      <nav-bar class="home-nav">
        <div slot="left">hello</div>
        <div slot="center">world</div>
        <div slot="right">PJC</div>
      </nav-bar>
    </div>
    <div id="home">
      <swipe class="my-swipe">
        <swipe-item v-for="i in banners">
          <a :href="i.link">
            <img :src="i.image" alt="">
          </a>
        </swipe-item>
      </swipe>
    </div>
    <recommand :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['最新','推荐','热门']" class="tab-control" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
    <ul>
      <li>hello1</li>
      <li>hello2</li>
      <li>hello3</li>
      <li>hello4</li>
      <li>hello5</li>
      <li>hello6</li>
      <li>hello7</li>
      <li>hello8</li>
      <li>hello9</li>
      <li>hello10</li>
      <li>hello11</li>
      <li>hello12</li>
      <li>hello13</li>
      <li>hello14</li>
      <li>hello15</li>
      <li>hello16</li>
      <li>hello17</li>
      <li>hello18</li>
      <li>hello19</li>
      <li>hello20</li>
      <li>hello21</li>
      <li>hello22</li>
      <li>hello23</li>
      <li>hello24</li>
      <li>hello25</li>
      <li>hello26</li>
      <li>hello27</li>
      <li>hello28</li>
      <li>hello29</li>
      <li>hello30</li>
      <li>hello31</li>
      <li>hello32</li>
      <li>hello33</li>
      <li>hello34</li>
      <li>hello35</li>
      <li>hello36</li>
      <li>hello37</li>
      <li>hello38</li>
      <li>hello39</li>
      <li>hello40</li>
      <li>hello41</li>
      <li>hello42</li>
      <li>hello43</li>
      <li>hello44</li>
      <li>hello45</li>
      <li>hello46</li>
      <li>hello47</li>
      <li>hello48</li>
      <li>hello49</li>
      <li>hello50</li>
      <li>hello51</li>
      <li>hello52</li>
      <li>hello53</li>
      <li>hello54</li>
      <li>hello55</li>
      <li>hello56</li>
      <li>hello57</li>
      <li>hello58</li>
      <li>hello59</li>
      <li>hello60</li>
      <li>hello61</li>
      <li>hello62</li>
      <li>hello63</li>
      <li>hello64</li>
      <li>hello65</li>
      <li>hello66</li>
      <li>hello67</li>
      <li>hello68</li>
      <li>hello69</li>
      <li>hello70</li>
      <li>hello71</li>
      <li>hello72</li>
      <li>hello73</li>
      <li>hello74</li>
      <li>hello75</li>
      <li>hello76</li>
      <li>hello77</li>
      <li>hello78</li>
      <li>hello79</li>
      <li>hello80</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontroll/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import Recommand from './childP/JCRecommendHome'
  import FeatureView from './childP/FeatureView'
  import { Swipe, SwipeItem } from 'components/common/swiper//index';

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
        currentType:'pop'
      }
    },
    //生命周期函数
    created() {
      //请求多个数据
     this.getHomeMultiData();
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');
    },
    methods:{
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



      /*
      * 网络请求
      */
      getHomeMultiData(){
        getHomeMultiData(  ).then( res =>{
          this.banners = res.data.banner.list;
          console.log(this.banners);
          this.recommends = res.data.recommend.list;
          console.log(res);
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #45454d;

    position: fixed;
    left: 0px;
    right: 0px;
    z-index: 9;
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
  .tab-control{
    /*向上运动并停留*/
    position: sticky;
    top: 44px;
    background: #fff;
    z-index: 9;
  }
</style>
