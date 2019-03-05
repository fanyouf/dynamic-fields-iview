<template>
  <div style="padding:40px;">
    <!-- <BaseComponent></BaseComponent> -->
    <h1>DynamicFieldsIview 组件</h1>
    <DynamicFieldsIview 
      :pFieldsList="fields" 
      pStorageId="store1"
      @query="hQquery"
      @dept1Change="hDept1Change"
    ></DynamicFieldsIview>
    <hr>
    <!-- <JsxComponent></JsxComponent> -->
  </div>
</template>
<script>
import BaseComponent from "./components/base-component";
import DynamicFieldsIview from "./components/dynamic-fields-iview";
import JsxComponent from "./components/jsx-component";
export default {
  name: "",
  data() {
    return {
      fields: [
        {
          label: "一级部门",
          name: "dept1",
          data: [
            { label: "一级部门1", value: "code11" },
            { label: "一级部门2", value: "code12" },
          ],
          initValue: "code11",
          type: "select",
          initChecked:true,
        },
        {
          label: "二级部门",
          name: "dept2",
          data: [
            { label: "二级部门1", value: "code21" },
            { label: "二级部门2", value: "code22" },
            { label: "二级部门3", value: "code23" }
          ],
          type: "select",
          initChecked:true,
        },
        {
          label: "三级部门",
          name: "dept3",
          data: [
            { label: "三级部门1", value: "code31" },
            { label: "三级部门2", value: "code32" }
          ],
          type: "select",
          initChecked:true,
        },
        {
          label: "关键字",
          name: "keywords",
          initValue: "erp",
          type: "txt",
          placeholder: "请输入商品的关键字...."
        },
        {
          label: "单个日期",
          name: "date",
          type: "date",
          unit:"D",
          initValue: "2019-03-01",
        },
        {
          label: "是否",
          name: "deadline",
          type: "checkbox",
          initValue: true,
        },
        {
          label: "日期范围",
          name: "dateRange",
          data: "",
          type: "dateRange",
          unit:"D",
          initValue: ["2019-03-01","2019-03-03"]
        }
      ]
    };
  },
  components: {
    DynamicFieldsIview,
    BaseComponent,
    JsxComponent
  },
  methods:{
    hQquery({cond,_el}){
      console.info("query cond",cond);

      setTimeout(()=>{
        _el.isQuery = false
      },2000)
    },
    hDept1Change(val){
      console.info("hDept1Change",val)
    }
  }
};
</script>