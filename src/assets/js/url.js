let url = {
  'bannerList': 'bannerList',
  'goodsLists': 'goods/gitLists'
};

let host = 'http://rap2api.taobao.org/app/mock/119078/';

for (let key in url){
  url[key] = host + url[key]
}

export default url;