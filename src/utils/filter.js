//数字过滤器
export const filterNum = function (num) {
  return Number(num) < 10 ? "0" + num : num;
};

//时间过滤器
export const filterTime = function (time) {
  let s_time = time / 1000;
  let m = parseInt(s_time / 60); //分钟
  m = m < 10 ? "0" + m : m;
  let s = parseInt(s_time % 60);
  s = s < 10 ? "0" + s : s;
  return `${m}:${s}`;
};
