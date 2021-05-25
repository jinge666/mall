<template>
  <div class="warpper" ref="warpper">
    <div class="contant">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return{
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.warpper,{
      pullUpLoad:this.pullUpLoad,
      probeType:this.probeType,
      click:true
    })
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('scrollUp')
    })
  },
  methods:{
    //返回顶部函数
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    //多次上拉加载
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //刷新
    refresh(){
      this.scroll.refresh()
      // console.log('图片加载完成')
    }
  }
}
</script>

<style>

</style>