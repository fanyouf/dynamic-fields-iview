

<script>
import { Button, Select, Option, Input, Checkbox,DatePicker,Poptip,Tree  } from "iview";
import TreeNode from "./treenode"
export default {
  props: {
    pFieldsList: {
      type: Array,
      required:true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      value: {},
      nodeList:[],
      cCisiableFieldKeys:[] // 可见的字段
    };
  },
  components:{
    TreeNode
  },
  computed:{
    cVisiableFieldKeys(){
      return this.nodeList.filter(item=>item.checked).map(item=>item.name)
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
        checked: !(false ===item.checked)
      }
    })

    this.visiableFieldKeys = this.nodeList.map(item=>item.key);

    this.fieldsFilter = this.buildFieldsFilter()

  },
  methods: {
    handlerChange(e) {
      console.info(e);
    },

    buildFieldsFilter(){
      let that = this;
      let fieldsFilter = this.$createElement(TreeNode,{
        props:{
          nodeList:that.nodeList
        },
        on:{
          fieldListVisableChange:(visiableList)=>{
            // that.$forceUpdate();
            that.nodeList.forEach(item=>{
              item.checked = visiableList.includes(item.name)
            })
            // that.visiableFieldKeys = visiableList
            // console.info(visiableList);
            // that.hFieldListVisableChange(visiableList)
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
            console.info(that.value);
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
            console.info(that.value);
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
    let btnList = []
    let btnOk = <Button type="primary" size="small">查询</Button>
    let btnReset = <Button type="primary" size="small">重置 </Button>

  

    btnList.push(btnOk);
    btnList.push(btnReset);
    btnList.push(this.fieldsFilter);

    let btns = <div class="queryAreaItem">{btnList}</div>
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

    result.push(btns)

    return <div class="queryArea">{result}</div>;
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
    display: flex
    padding: 2em
    position: relative
    flex-wrap: wrap
    outline: 1px solid #ccc
    .queryAreaItem
        padding: 5px
        display: flex
        align-items: center
        flex: 0 0 25%
        label
          flex: 0 0 70px
        .select
            flex: 1 1 auto
</style>