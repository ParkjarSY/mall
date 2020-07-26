<template>
   <div id="detail">
       <detail-nav/>
   </div>
</template>

<script>

import detailNav from './childComponents/detailNavBar'

export default {
    name:'detail',
    components:{
        detailNav,

        
    },
    
    data(){
        return{
            iid:null,

        }
    },
    created(){
        this.iid =this.$route.params.id
    }
}
</script>

<style lang="stylus" scoped>

</style>