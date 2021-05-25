<template>
  <div class="wrapper">
      <h2>分类页面金哥正在开发，请不要着急</h2>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'
export default {
name:'CateGoay',

data(){
  return {
    scroll:null,
  }
},
props:{
probeType:{
  type:Number,
  default:0
}
},
mounted(){
  console.log(document.querySelector('.wrapper'))
  this.scroll = new BScroll(document.querySelector('.wrapper'),{
    probeType:3,
    pullUpLoad:true
  })
  this.scroll.on('scroll',position => {
    console.log(position)
  }),
  this.scroll.on('pullingUp',() => {
    console.log('上拉加载更多')
    setTimeout(() => {
      this.scroll.finishPullUp()
    },2000)
  })
},
methods:{
  btnClick(){
    console.log('按钮点击')
  }
}
}
</script>

<style>
.wrapper{
  margin-top: 200px;
  padding: 40px;
  text-align: center;
  height: 150px;
  background-color: peru;
  /* overflow: hidden; */
  /* overflow-y: scroll; */ 
}
</style>