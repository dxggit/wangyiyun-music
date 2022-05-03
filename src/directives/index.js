// export const imgLazyLoad = function (el, binding) {
// const positon = el.getBoundClientRect(); //获取元素左上右下相对于浏览器可视窗的位置
// //获取浏览器可视区域的高度
// const clientHeight = document.documentElement.clientHeight;
// if (positon.top <= clientHeight) {
//   console.log("ok");
//   el.onerror = () => {
//     el.src = "../assets/wangyi-logo.png";
//   };
//   el.src = binding.value;
// }
// };
export default {
  install(Vue) {
    Vue.directive("imgLazyLoad", {
      mounted: function (el, binding) {
        const positon = el.getBoundClientRect(); //获取元素左上右下相对于浏览器可视窗的位置
        //获取浏览器可视区域的高度
        const clientHeight = document.documentElement.clientHeight;
        if (positon.top <= clientHeight) {
          // console.log("ok");
          el.onerror = () => {
            el.src = "../assets/wangyi-logo.png";
          };
          el.src = binding.value;
        }
      },
    });
  },
};
