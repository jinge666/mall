<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div> 
</template>

<script>
export default {
name:'HomeRecommend',
props:{
  recommend:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  width: 100%;
  border-bottom: 8px solid #eeeeee;
  padding: 10px 0 20px;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 80px;
  height: 80px;
  padding-bottom: 5px;
}
</style>