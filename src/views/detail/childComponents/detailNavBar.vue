<template>
    <div id="detailNavBar">
        <nav-bar >
            <div slot="left" class="back" @click="returnPage()">
                <img src="~assets/img/common/返回.svg" alt="" class="imgb">
            </div>
            <div slot="center" class="titles">
                <div v-for="(items,index) in titles" :key = index 
                class="title-item"  
                :class="{active: index === currentsIndex}"
                @click="titleClick(index)">
                    {{items}}
                </div>
               
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from'components/common/navbar/NavBar';


export default {
    name:'detailNavBar',
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentsIndex:0,
        }
    },
    methods:{
        titleClick(index){
            this.currentsIndex = index;
        },
        returnPage(){
            // this.$router.back()
            this.$router.go(-1)

        }
    },

}
</script>

<style  scoped>
    .titles{
        display:flex;
        /* margin-left: 20; */
        padding: 0;
    }
    .title-item{
        flex:1;
        font-size: 13px;
    }
    .active{
        color: var(--color-high-text);
    }
    .imgb{
        height: 25px;
        width: 25px;
    }
    .back{
        margin-top: 8px;
        /* margin-right: 15px; */
    }
</style>