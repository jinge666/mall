<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <tab-centrol :title="['流行','新款','精选']" 
                 class="tab-home"
                 ref="tabCentrol1"
                 @btnClick="btnClick"
                 v-show="isTabCentrolShow"
    ></tab-centrol>
   <scroll 
   class="contant" 
   ref="scroll" 
   :probe-type="3" 
   :pull-up-load="true"
   @scroll="topScroll"
   @scrollUp="scrollUp">
    <home-swiper :banner="banner"
                 @imageLoad="imageLoad"
                 ></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-centrol :title="['流行','新款','精选']" 
                 class="tab-home"
                 ref="tabCentrol2"
                 @btnClick="btnClick"
    ></tab-centrol>
    <goods-list :goods="goods[currenttype].list"></goods-list>
   </scroll>
   <back-top @click.native="topClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childcomponents/HomeSwiper'
import HomeRecommend from './childcomponents/HomeRecommend'
import HomeFeature from './childcomponents/HomeFeature'

import NavBar from "components/common/navbar/NavBar";
import TabCentrol from 'components/common/TabCentrol/TabCentrol'
import GoodsList from 'components/contant/goodlist/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/contant/backtop/BackTop'

import { getHomeMultidata,getHomeProduce } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabCentrol,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      isTabCentrolShow:false,
      banner: [],
      recommend: [],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currenttype:'pop',
      isShow:false,
      tabCentrolTop:662,
      savaY:0
    };
  },
  created() {
    this.getMultidata()
    this.getProduce('pop')
    this.getProduce('new')
    this.getProduce('sell')
  },
  mounted(){
    //监听图片加载完成
    const refresh = this.deboundce(this.$refs.scroll.refresh,10)
    this.$bus.$on('imageItemLoad', () => {
      // console.log('图片加载完成')
      refresh()
    })
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.savaY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.savaY = this.$refs.scroll.scroll.y
  },
  methods:{
    //事件监听方法

    //防抖函数
    deboundce(func,delay){
      let timer = null
      return function(...args){
        if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this,args)
      },delay)
      }
    },
    //监听点击切换“流行”、“新款”、“精选”
    btnClick(index){
      // console.log(index)
      switch(index){
        case 0: this.currenttype = 'pop'
        break;
        case 1: this.currenttype = 'new'
        break;
        case 2: this.currenttype = 'sell'
      }
      this.$refs.tabCentrol1.centrolIndex = index
      this.$refs.tabCentrol2.centrolIndex = index
    },
    //返回顶部
    topClick(){
      // console.log('返回顶部')
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //监听返回顶部图标出现
    topScroll(position){
      this.isShow = -position.y>1000
      // console.log(position)
      this.isTabCentrolShow = -position.y >662

    },
    //上拉加载
    scrollUp(){
      this.getProduce(this.currenttype)
    },
    //获取tab-centrol到顶部的距离
    imageLoad(){
      this.tabCentrolTop = this.$refs.tabCentrol2.$el.offsetTop
    },

    //网络请求方法
    //获取四个板块
    getMultidata(){
      getHomeMultidata().then(res => {
      (this.banner = res.data.data.banner.list),
        (this.recommend = res.data.data.recommend.list);
    })
    },
    //获取goods内容图片
    getProduce(type){
      const page = this.goods[type].page+1
      getHomeProduce(type,page).then(res => {
        // console.log(res.data.data.list)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
        // this.$refs.scroll.refresh()
      })
    }
  }
};
</script>
<style scoped>
#home{
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}
.home-bar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-home{
  position: sticky;
  top: 44px;
}
.contant{
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>