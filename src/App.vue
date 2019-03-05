<template>
  <div style="padding:40px;">
    <BaseComponent></BaseComponent>
    <hr>
    <DynamicFieldsIview :pFieldsList="fields"></DynamicFieldsIview>
    <hr>
    <JsxComponent></JsxComponent>
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
          type: "select"
        },
        {
          label: "二级部门",
          name: "dept2",
          data: [
            { label: "二级部门1", value: "code21" },
            { label: "二级部门2", value: "code22" },
            { label: "二级部门3", value: "code23" }
          ],
          // filterable:true,
          // multiple :true,
          type: "select"
        },
        {
          label: "三级部门",
          name: "dept2",
          data: [
            { label: "三级部门1", value: "code31" },
            { label: "三级部门2", value: "code32" }
          ],
          // clearable :true,
          type: "select"
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
          initValue: "2019-03-01"
        },
        {
          label: "是否",
          name: "deadline",
          type: "checkbox",
          initValue: true
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
  }
};
</script>