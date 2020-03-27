<template>
      <div class="tab-bar-item" @click="itemClick" >
        <slot name="item-icon" v-if="!actives"></slot>
        <slot name="item-icon-active" v-else></slot>
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div>
      </div>
</template>

<script>

    export default {
        name: "TabBarItem",
      props:{
        path:String,
        changeColor:{
          type:String,
          default:'red',
        }
      },
      computed:{
        actives(){
          return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
          return this.actives ? {color:this.changeColor}:{};
        }
      },
        data(){
          return{
            //actives:true
          }
        },
    methods:{
          itemClick(){
            this.$router.replace(this.path)
          }
    },
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size:14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
