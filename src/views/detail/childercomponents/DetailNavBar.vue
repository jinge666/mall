<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in title" :key="index" 
      class="item-title"
      :class="{active: currentIndex == index}"
      @click="titleClick(index)"
      >
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>

import NavBar from "components/common/navbar/NavBar"

export default {
name:'DetailNavBar',
components:{
  NavBar,
},
data(){
  return{
    title:['商品','参数','评论','推荐'],
    currentIndex:0,
  }
},
methods:{
  //监听导航栏标题点击颜色事件
  titleClick(index){
    this.currentIndex = index
    this.$emit('titleClick',index)
  },
  //监听返回事件
  backClick(){
    this.$router.back()
  }
}
}
</script>

<style>
.title{
  display:flex;
  font-size: 13px;
}
.item-title{
  flex: 1;
}
.back img{
  margin-top: 10px;
}
.active{
  color: var(--color-high-text);
}
</style>