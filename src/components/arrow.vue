<template>
<div class="fixed" @click="hClick">
    <Icon v-if="hasMore" type="ios-arrow-down" title="展开" />
    <Icon v-else type="ios-arrow-up" style="position: relative;top: -5px;" title="收起"/>

</div>
</template>
<script>
export default {
    props:{
        pHasMore:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            hasMore: this.pHasMore
        }
    },
    methods:{
        hClick(){
            
            this.$emit("showAllChange",this.hasMore);
            this.hasMore = !this.hasMore;
        }
    },
    watch:{
        pHasMore:{
            handler(newVal){
                this.hasMore = this.pHasMore
            },
            immediate:true
        }
    }
}
</script>
<style scoped>
    .fixed{
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
        font-size: 24px;
        background-color: #fff;
        cursor: pointer;
    }
</style>


