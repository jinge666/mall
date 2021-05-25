<template>
  <div class="goods" >
    <goodslist-item  v-for="(item,index) in goods" :key="index" :goods-item="item">  
    </goodslist-item>
  </div>
</template>

<script>
import goodslistItem from './goodslistItem'
export default {
name:'GoodsList',
components:{
  goodslistItem
},
props:{
  goods:{
    type:Array,
    default(){
      return[]
    },
  }
}
}
</script>
<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>