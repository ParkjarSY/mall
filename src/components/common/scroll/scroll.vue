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
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
      })

      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })

      this.scroll.scrollTo(0,0)
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      }
    }
  }
</script>

<style scoped>

</style>
