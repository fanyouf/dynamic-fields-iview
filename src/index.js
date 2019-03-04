import DynamicFieldsIview from "./components/dynamic-fields-iview";

// ...如果还有的话继续添加

const components = {
    DynamicFieldsIview,
    // ...如果还有的话继续添加
}

const install = function (Vue, opts = {}) {
    let keys = Object.keys(components);
    keys.forEach(key => {
        Vue.component(key, components[key]);
    })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    DynamicFieldsIview
    // ...如果还有的话继续添加
}