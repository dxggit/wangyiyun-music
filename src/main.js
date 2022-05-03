import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/common.css";
import { isVisible } from "./utils/tools";
// import directives from "@/directives";
// //注册全局自定义指令
// Vue.use(directives);
Vue.directive("imgLazyLoad", {
  mounted: function (el, binding) {
    if (isVisible(el)) {
      console.log("ok");
      el.onerror = () => {
        el.src = "../assets/wangyi-logo.png";
      };
      el.src = binding.value;
    }
  },
});
Vue.use(ElementUI);
Vue.config.productionTip = false;
// 页面回到顶部

Vue.prototype.$scrollTo = (el) => {
  el.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // 滚动行为：smooth平滑滚动，instant瞬间滚动，默认值auto，等同于instant
  });
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
