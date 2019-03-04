<script>
import { Button, Select, Option, Input, Checkbox } from "iview";
console.dir(Select);
console.dir(Option);
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
      value: {}
    };
  },
  mounted() {
    this.pFieldsList.forEach(item => {
      this.value[item.name] = item.initValue || "";
    });
  },
  methods: {
    handlerChange(e) {
      console.info(e);
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
      let rs = this.$createElement(
        Select,
        {
          props: {
            value: obj.initValue
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
          {label}
          {rs}
        </div>
      );
    }
  },
  render(createElement) {
    let result = [];
    this.pFieldsList.forEach(item => {
      switch (item.type) {
        case "select":
          result.push(this.buildSelect(item));
          break;

        case "txt":
          result.push(this.buildText(item));
          break;
        case "checkbox":
          result.push(this.buildCheckbox(item));

        default:
          break;
      }
    });

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
};
</script>
<style lang="sass">
.queryArea
    display: flex
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