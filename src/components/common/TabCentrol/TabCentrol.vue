<template>
  <div class="tab-centrol">
    <div v-for="(item,index) in title" 
         class="item-centrol" 
         :key="index" 
         @click="tabClick(index)"
         :class="{active: index == centrolIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name:"TabCentrol",
data(){
  return{
    centrolIndex: 0
  }
},
methods:{
  tabClick(index){
    this.centrolIndex = index
    this.$emit('btnClick',index)
  }
},
props:{
  title:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.tab-centrol{
  z-index: 9;
  height: 44px;
  line-height: 44px;
  display: flex;
  background-color: #ffffff;
}
.item-centrol{
  flex: 1;
  text-align: center;
  font-size: 20px;
}
.active span{
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 3px;
  color: palevioletred;
  border-bottom: 3px solid palevioletred;
}
</style>