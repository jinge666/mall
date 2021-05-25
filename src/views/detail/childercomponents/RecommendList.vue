<template>
  <div class="list">
      <div v-for="(item,index) in recommends" :key="index" class="item-list">
        <a :href="item.item_url">
          <img :src="item.image" alt="" @load="recommendsImage">
          <div class="title">
            <p>{{item.title}}</p>
          </div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
name:'RecommendList',
props:{
  recommends:{
    type:Array,
  }
},
data(){
  return{
    counter:0,
  }
},
methods:{
  recommendsImage(){
    if(++this.counter==this.recommends.length){
      this.$emit('recommendsImage')
      // console.log('recommendsImage可以')
    }
  }
},
}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  padding: 20px 0;
  position: relative;
}
.item-list{
  width: 48%;
  position: relative;
}
.item-list img{
  width: 100%;
  padding: 20px 0;
}
.title{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  font-size: 12px;
  bottom: 5px;
  text-align: center;
}
.title p{
  overflow: hidden;
  text-overflow: ellipsis;
   white-space: nowrap;
   margin-bottom: 3px;
}
</style>