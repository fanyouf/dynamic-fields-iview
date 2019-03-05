<template>
    <Poptip placement="bottom-end" trigger="click" title="自定义字段" >
        <Button type="primary" size="small">自定义字段</Button>

        <!-- <span><Icon size="24" type="md-color-palette"  title="自定义字段"/></span> -->
        <div slot="content">
            <Tree
            show-checkbox
            @on-check-change="hCheckChange"
            :data="treeData"
            />
        </div>
    </Poptip>
</template>
<script>
export default {
    name: 'FieldList',
    data () {
        return {
            treeData:[]
        }
    },
    mounted(){
        
    },
    props:{
        nodeList:{
            require:true,
            type:Array,
            validator:(item)=>{
                return true; // ("title" in item)
            }
        }
    },
    methods:{
        hCheckChange(allcheckedlist,currentNode){
            console.info(allcheckedlist,currentNode);
            this.$emit("fieldListVisableChange",allcheckedlist.map(item=>item.name))
        }
    },
    watch:{
        nodeList:{
            handler(newVal){
                this.treeData = this.nodeList.map(item=>{
                            return {
                                name:item.name,
                                title:item.title,
                                checked:!(item.checked === false)
                            }
                        })
            },
            immediate:true
        }
    }
}
</script>

<style>
.ivu-tree-title-selected, .ivu-tree-title-selected:hover {
    background-color: inherit;
}
</style>

