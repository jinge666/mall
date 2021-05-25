<template>
  <div class="tab-bar-item" @click="btnClick">
    <!-- <img src="../../assets/img/tabbar/home.svg">
  <div>首页</div> -->
  <div v-if="!isactivity"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name:'TabBarItem',
props:{
  path:String,
  activeColor:{
    type:String,
    default:'red '
  }
},
data(){
  return{
    // isactivity:true,
  }
},
methods:{
  btnClick(){
    // console.log('btunclick')
    this.$router.push(this.path)
  }
},
computed:{
  isactivity(){
    return this.$route.path == this.path
    // return this.$route.path.indexOf(this.path) !== -1
  },
  activeStyle(){
    return this.isactivity ? {color:this.activeColor}: {}
  }
}
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14;
  margin-bottom: 2px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  padding-top: 2px;
  /* 去掉图片下面的间隙 */
  vertical-align: middle;
}
/* .active{
  color:red
} */
</style>