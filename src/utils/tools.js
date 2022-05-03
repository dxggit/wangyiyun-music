export const scrollLoading = () => {
  //滚动条滚动时，距离顶端的距离
  let crollTop = document.body.scrollTop;
  //可是区域的高度
  let lientHeight = document.body.clientHeight;
  // 滚动条的长度
  let crollHeight = document.body.scrollHeight;
  return crollTop + lientHeight >= crollHeight;
};

//判断元素是否在可见区域
export const isVisible = (el) => {
  const position = el.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;
  //顶部边缘可见
  const topVisible = position.top > 0 && position.top < windowHeight;
  //底部边缘可见
  const bottomVisible = position.bottom > 0 && position.bottom < windowHeight;
  return topVisible || bottomVisible;
};
