let url = {
  // 首页
  'bannerList': 'bannerList',
  'goodsLists': 'goods/gitLists',
  // 商品详情
  'goodsDetail': 'goods/detail',
  'goodsDeal': 'goods/deal',
  'goodsEvaluation': 'goods/evaluation',
  // 搜索
  'searchList': 'search/list',
  // 分类
  'categoryTop': 'category/topList',
  'categoryRank': 'category/rank',
  'categorySub': 'category/subList',
  // 购物车
  'cartList': 'cart/list',
  'cartAdd': 'cart/add',
  'cartUpdate': 'cart/update',
  // 个人地址管理
  'addressList': 'address/list',
  'addressAdd': 'address/add',
  'addressRemove': 'address/remove',
  'addressUpdate': 'address/update',
  'addressDefault': 'address/setDefault'

};

let host = 'http://rap2api.taobao.org/app/mock/119078/';

for (let key in url){
  url[key] = host + url[key]
}

export default url;