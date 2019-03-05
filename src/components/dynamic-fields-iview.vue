

<script>
import { Button, Select, Option, Input, Checkbox,DatePicker,Poptip,Tree  } from "iview";
import TreeNode from "./treenode"
import Arrow from "./arrow"
import store from "../lib/store"
export default {
  props: {
    pStorageId:{type:String,default:""},
    pFieldsList: {
      type: Array,
      required:true,
      default: () => {
        return [];
      },
      validator:(arr)=>{
        try{
          if(Array.from(new Set(arr.map(item=>item.name))).length !== arr.length){
            console.error("name 必须唯一");
            return false
          }
        }
        catch(e){
          return false;
        }
        return true
      }
    }
  },
  data() {
    return {
      value: {},
      nodeList:[],
      isQuery:false,

    };
  },
  components:{
    TreeNode,
    Arrow
  },
  computed:{
    cVisiableFieldKeys(){
      return this.nodeList.filter(item=>item.checked).map(item=>item.name)
    },
    cHasMoreToShow(){
      return this.nodeList.length > this.cVisiableFieldKeys.length
    }
  },
  mounted() {
    this.pFieldsList.forEach(item => {
      this.value[item.name] = item.initValue || "";
    });

    this.nodeList = this.pFieldsList.map(item=>{
      return {
        name:item.name,
        title:item.label,
        checked: !!item.initChecked,
        initChecked:!!item.initChecked
      }
    })

    

    this.visiableFieldKeys = this.nodeList.map(item=>item.key);

    this.fieldsFilter = this.buildFieldsFilter()
    
    this.initStatusWithStorage()
  },
  methods: {
    hQuery(){
      alert("query....");
      this.$emit("query",{cond:this.value,_el:this});
      this.isQuery = true;
      console.info(this.value)
      this.saveFieldStatuToLocal();
    },
    initStatusWithStorage(){
      if(!!this.pStorageId){
        let rs =  store.get(this.pStorageId);
        if(rs){
          this.nodeList.forEach(item=>{
            let storeItem = rs.find(it=>it.name === item.name);
            storeItem && (item.checked = storeItem.checked)
          })
        }
      }
    },
    saveFieldStatuToLocal(){
      if(!!this.pStorageId){
      let rs = this.nodeList.map(item=>{return {
        name:item.name,
        title:item.title,
        checked: item.checked,
        initChecked:item.initChecked
      }})

      store.set(this.pStorageId, rs);
    }
    },
    handlerChange(e) {
      console.info(e);
    },

    buildBtns(){
      let that = this;
      let btnList = []
    
      let btnOk = this.$createElement(
        Button,{
          on:{
            click:that.hQuery
          },
          props:{
            type: "primary",
            size: "small",
            loading: that.isQuery
          }
        },
        "查询")
      
      let btnReset = <Button type="primary" size="small">重置</Button>


      btnList.push(btnOk);
      btnList.push(btnReset);
      btnList.push(this.fieldsFilter);
      return btnList;

    },

    buildArrow(){
      let that = this;
      let arrow = this.$createElement(Arrow,{
        props:{
          pHasMore: that.cHasMoreToShow
        },
        on:{
          showAllChange:(flag)=>{
            
            that.nodeList.forEach(item=>{
              item.checked = flag ? true : !!item.initChecked
            })
            
          }
        }
      })

      return arrow;
    },

    buildFieldsFilter(){
      let that = this;
      let fieldsFilter = this.$createElement(TreeNode,{
        props:{
          nodeList:that.nodeList
        },
        on:{
          fieldListVisableChange:(visiableList)=>{
            that.nodeList.forEach(item=>{
              item.checked = visiableList.includes(item.name)
            })
          }
        }
      })

      return fieldsFilter;
    },
    buildText(obj) {
        let that = this;
        obj.onChange = e => {
            // console.info(e)
            that.value[obj.name] = e.target.value.trim();
            console.info(that.value);
        };
        let label = <label>{obj.label}</label>;
        let val = this.value[obj.name];
        let rs = this.$createElement(Input, {
            class: "txt",
            on: { "on-change": obj.onChange },
            props: {
                placeholder: obj.placeholder || "Enter something...",
                value: obj.initValue
            }
        });
        return (
            <div class="queryAreaItem">
                {label}
                {rs}
            </div>
        );
    },
    buildDateRange(obj) {
        let that = this;
        obj.onChange = e => {
            that.value[obj.name] = e;
            console.info(that.value);
        };
        let label = <label>{obj.label}</label>;
        let val = this.value[obj.name];

        let rs = this.$createElement(
            DatePicker,
            {
                props: {
                    type: "daterange",
                    placement: "bottom-end",
                    value: obj.initValue,
                },
                class: "datePicker",
                on: { "on-change": obj.onChange }
            },
        );
        return (
            <div class="queryAreaItem">
                {label}
                {rs}
            </div>
        );
    },
    buildDate(obj) {
        let that = this;
        obj.onChange = e => {
            that.value[obj.name] = e;
            console.info(that.value);
        };
        let label = <label>{obj.label}</label>;
        let val = this.value[obj.name];
        let rs = this.$createElement(
            DatePicker,
            {
                props: {
                    type: "date",
                    placement: "bottom-end",
                    value: obj.initValue,
                },
                class: "datePicker",
                on: { "on-change": obj.onChange }
            },
        );
        return (
            <div class="queryAreaItem">
                {label}{rs}
            </div>
            // <DatePicker type="date" placement="bottom-end" placeholder="Select date"></DatePicker>
        );
    },
    buildSelect(obj) {
        let that = this;
        obj.onChange = e => {
            that.value[obj.name] = e;
            that.$emit(obj.name + "Change", that.value);
        };
        let label = <label>{obj.label}</label>;
        let val = this.value[obj.name];
        let options = [];
        options.push();
        obj.data.forEach(item => {
            let o = <i-option value={item.value}>{item.label}</i-option>;
            options.push(o);
        });
        let clearable = !obj.clearable
        let multiple = !obj.multiple
        let filterable = !obj.filterable
        let rs = this.$createElement(
            Select,
            {
                props: {
                    value: obj.initValue,
                    clearable,
                    multiple,
                    filterable
                },
                class: "select",
                on: { "on-change": obj.onChange }
            },
            options
        );
        // let rs = <i-select  v-model="val" >{options}</i-select>
        return (
            <div class="queryAreaItem">
                {label}
                {rs}
            </div>
        );
    },

    buildCheckbox(obj) {
        let that = this;
        obj.onChange = e => {
            that.value[obj.name] = e;
            that.$emit(obj.name + "Change", that.value);
        };
        let label = <label>{obj.label}</label>;
        let val = this.value[obj.name];
        let rs = this.$createElement(Checkbox, {
            class: "checkbox",
            on: { "on-change": obj.onChange },
            props: {
                value: obj.initValue
            }
        });
        return (
            <div class="queryAreaItem">
                {label}{rs}
            </div>
        );
    }
  },
  render(createElement) {

    console.info("render...............")
    let that = this;
    let result = [];

    this.pFieldsList.filter(item=>{
      return  that.cVisiableFieldKeys.includes(item.name)
    }).forEach(item => {
      switch (item.type) {
        case "select":
          result.push(this.buildSelect(item));
          break;
        case "txt":
          result.push(this.buildText(item));
          break;
        case "checkbox":
          result.push(this.buildCheckbox(item));
          break;
        case "dateRange":
          result.push(this.buildDateRange(item));
          break;
        case "date":
          result.push(this.buildDate(item));
          break;
        default:
          break;
      }
    });

    this.btnList = this.buildBtns()
    
    this.arrow = this.buildArrow()



    // result.push(btns)

    return <div class="queryArea">{this.arrow}<div class="queryAreaList">{result}</div><div class="queryAreabtns">{this.btnList}</div></div>;
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.info(this.value);
        this.$emit("input", this.value);
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="sass">
.queryArea
  padding: 2em
  outline: 1px solid #ccc
  position: relative
  .queryAreaList
    display: flex
    position: relative
    flex-wrap: wrap
    .queryAreaItem
        padding: 5px
        display: flex
        align-items: center
        flex: 0 0 25%
        label
          flex: 0 0 70px
        .select
          flex: 1 1 auto
  .queryAreabtns
    .ivu-btn
      margin-right: 1em

</style>