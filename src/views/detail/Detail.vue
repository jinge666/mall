<template>
<div id="detail">
  <detail-nav-bar class="detail-nav"  @titleClick=" titleClick" ref = 'navBar'></detail-nav-bar>
  <scroll class="contant" 
          ref="scroll"
          @scroll="scroll"
          :probeType="3"
          >
    <detail-swiper :top-images= "topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detailInfo="detail" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
    <detail-comments :comments="comments" ref="comments"></detail-comments>
    <recommend-list :recommends="recommends" @recommendsImage="recommendsImage" ref="recommend"></recommend-list>
  </scroll>
    <detail-botton-bar @cartClick ="cartClick"></detail-botton-bar>
    <!-- <back-top class="backtop" v-show="isShow" ></back-top> -->
    <toast :message="message" :isShow="isShow"></toast>
</div>
</template>

<script>
import DetailNavBar from './childercomponents/DetailNavBar'
import DetailSwiper from './childercomponents/DetailSwiper'
import DetailBaseInfo from './childercomponents/DetailBaseInfo'
import DetailShopInfo from './childercomponents/DetailShopInfo'
import DetailGoodsInfo from './childercomponents/DetailGoodsInfo'
import DetailParamInfo from './childercomponents/DetailParamInfo'
import DetailComments from './childercomponents/DetailComments'
import RecommendList from './childercomponents/RecommendList'
import DetailBottonBar from './childercomponents/DetailBottonBar'
import BackTop from '../../components/contant/backtop/BackTop'
import Scroll from 'components/common/scroll/Scroll'
import { mapActions } from 'vuex'
import Toast from '../../components/common/toast/Toast'

import {getDetailSwiper,Goods,Shop,GoodsParam,Comments,getRecommend} from 'network/detail'
export default {
name:'Detail',
components:{
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailComments,
  RecommendList,
  DetailBottonBar,
  BackTop,
  Toast
},
data(){
  return{
    iid:null,
    topImages:[],
    goods:{},
    shop:{},
    detail:{},
    paramInfo:{},
    comments:{},
    recommends:[],
    control:[],
    isShow:false,
    message:'',
    isShow:false
  }
},
methods:{
  //actions方法的映射
  ...mapActions(['addCart']),
   //购物车点击
   cartClick(){
    // console.log('点击添加购物车')
    const obj = {}
    obj.iid = this.iid
    obj.img = this.topImages[0]
    obj.title = this.goods.title
    obj.desc = this.goods.desc
    obj.newPrice = this.goods.realPrice
    // this.$store.commit('addCart',obj)
    this.addCart(obj).then(res =>{
      this.message = res
      this.isShow = true
      setTimeout(() =>{
        this.isShow = false
        this.message = ''
      },1500)
    })
    this.$store.dispatch('addCart',obj)

  },
  recommendsImage(){
    return new Promise((resolve,reject) => {
    }).then(() => {
    })
  },
  imageLoad(){
    return new Promise((resolve,reject) => {
    }).then(() => {
    })
  },
  getControl(){
    Promise.all([this.recommendsImage(),this.imageLoad()]).then(res => {
    })
  },
  imageLoad(){
    this.$refs.scroll.refresh()
    this.control = [],
    this.control.push(0),
    this.control.push(this.$refs.param.$el.offsetTop),
    this.control.push(this.$refs.comments.$el.offsetTop),
    this.control.push(this.$refs.recommend.$el.offsetTop)
  },
  titleClick(index){
    console.log(index)
    this.$refs.scroll.scrollTo(0,-this.control[index],200)
},
  scroll(position){
    // console.log(position)
    let controlY = -position.y
    this.isShow = controlY>1000
    const control = this.control
   let current = 0
    for(let i in this.control){
      if(current != i&&((i<control.length && controlY>=control[i] && controlY<control[(parseInt(i))+1]) || (i==control.length-1 && controlY>=control[i])))
      current = i
      this.$refs.navBar.currentIndex = current 
      // console.log(this.$refs.navBar.currentIndex)
    }
  },
  //返回顶部
  // backTop(){
  //   this.$refs.scroll.scrollTo(0,0,300)
  // },
},
created(){
  //保存传入的id
  this.iid = this.$route.params.iid
  
  //根据id请求详细数据
  getDetailSwiper(this.iid).then((res) => {
    // console.log(res)
    const data = res.data.result;
    this.topImages = data.itemInfo.topImages
    //获取商品信息
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    //创建店铺详细信息
    this.shop = new Shop(data.shopInfo)
    //保存商品详细数据
    this.detail = data.detailInfo
    //获取参数的信息
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    // 获取评论
    this.comments = new Comments(data.rate)
  })
    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.data.list
    })
}
}
</script>

<style  scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
}
.contant{
  height: calc(100% - 44px);
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0; */
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
/* .backtop{
  position: relative;
  bottom: 160px;
  left: 260px;
} */
</style>>
