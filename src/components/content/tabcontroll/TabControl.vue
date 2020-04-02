<template>
<!--  内容少不需要写插槽-->
    <div class="tab-control">
      <div v-for="(item,index) in titls"
           class="tab-control-items"
           :class="{active:index === currentIndex}"
           @click="tabClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titls:{
        type:[],
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0,
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-items{
    flex: 1;
  }
  .tab-control-items span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
