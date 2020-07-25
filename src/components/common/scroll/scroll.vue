<template>
  <!--  ref绑定给子组件-->
  <div class="wrapper " ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0,
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    mounted() {

      //创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad,

      })
      //监听位置变化
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      //监听上拉加载更多
      this.scroll.on('pullingUp',() =>{
        console.log('上拉更多');
        this.$emit('pullingUp')
      })
      this.scroll.scrollTo(0,0)
    },
    methods:{//移动到指定位置
      scrollTo(x,y,time=300){
        this.scroll && this.scrollTo &&this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
       this.scroll.finishPullUp()
      },//刷新
      refresh(){
       this.scroll && this.scroll.refresh()
        console.log("刷新");
      },
      getScrollY(){//获取y的值
        return this.scroll ? this.scroll.y:0//如果有值返回y的位置，如果没有返回0
      }
    }
  }
</script>

<style scoped>

</style>
