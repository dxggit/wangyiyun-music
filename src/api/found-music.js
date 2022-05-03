import request from "@/utils/request";

//发现音乐
export const foundMusicInfo = () => {
  return request({
    url: "/banner",
    method: "GET",
  });
};

//推荐歌单
export const commenMusicList = (limit) => {
  return request({
    url: `/personalized`,
    method: "GET",
    params: { limit },
  });
};

//推荐MV
export const commenMVList = () => {
  return request({
    url: "/personalized/mv",
    method: "GET",
  });
};

//独家放送
export const exclusiveList = () => {
  return request({
    url: "/personalized/privatecontent",
    method: "GET",
  });
};

//歌单
export const musicList = (params) => {
  return request({
    url: "/top/playlist",
    method: "GET",
    params,
  });
};
//歌单分类
export const catList = () => {
  return request({
    url: "/playlist/catlist",
    method: "GET",
  });
};
//精品歌单
export const highqualityTags = () => {
  return request({
    url: "/playlist/highquality/tags",
    method: "GET",
  });
};
//排行榜
export const toplist = () => {
  return request({
    url: "/toplist",
    method: "GET",
  });
};

///歌手列表
export const singerList = (paramsData) => {
  return request({
    url: "/artist/list",
    method: "GET",
    params: paramsData,
  });
};

//新歌速递
export const newMusicList = (paramsData) => {
  return request({
    url: "/top/song",
    method: "GET",
    params: paramsData,
  });
};

//获取精品歌单
export const highqualityList = (paramsData) => {
  return request({
    url: "/top/playlist/highquality",
    method: "GET",
    params: paramsData,
  });
};
