import{request} from './request'

export function getDetailSwiper(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Comments{
  constructor(rate){
    if(rate.eRate != 0){
    this.content = rate.list[0].content
    this.name = rate.list[0].user.uname
    this.explain = rate.list[0].explain ? rate.list[0].explain : ""
    this.style = rate.list[0].style
    this.created = rate.list[0].created
    this.img = rate.list[0].user.avatar
    }
  }
}