import WCascader from "./WCascader.vue";
import WCascaderItem from "./WCascaderItem.vue";

WCascader.install = (Vue) => {
  Vue.component(WCascader.name, WCascader);
  Vue.component(WCascaderItem.name, WCascaderItem);
};

export default WCascader;
