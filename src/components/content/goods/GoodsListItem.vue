<template>
    <div class="goods" @click="itemClick">
      <img :src="goodItem.show.img" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodItem.title}}</p>
        <span class="price">{{goodItem.price}}</span>
        <span class="collection">{{goodItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        //将直接操作的东西放到vuex上
        //用bus 总线来更改信息

        this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/' + this.goodItem.iid)
        // this.$router.push({
        //   path:'/detail',
        //   query:{
            
        //   }
        // })
      }
    }
  }
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collection {
    position: relative;
  }

  .goods-info .collection::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>
