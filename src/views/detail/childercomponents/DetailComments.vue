<template>
  <div id="comments" v-if="Object.keys(comments).length !== 0">
    <div class="comments-info">
      <span class="left">用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="user">
       <img :src="comments.img" alt="">
       <span class="username">{{comments.name}}</span>
    </div>
    <div class="user-comments">{{comments.content}}</div>

    <div class="style">
      <span>{{date}}</span>
      {{comments.style}}</div>
    <div class="reply">{{comments.explain}}</div>
  </div>
</template>

<script>
export default {
name:'DetailComments',
data(){
  return{
    date:null
  }
},
props:{
  comments:{
    type:Object,
    default(){
      return{}
    }
  }
},
created(){
  this.date = this.$moment(this.comments.created).format('YYYY-MM-DD')
},
}
</script>

<style scoped>
.comments-info{
  padding: 10px;
  padding-bottom: 40px;
  border-bottom: 3px solid #d1cccc;
}
.comments-info .right{
  color: black;
  font: 700;
  float: right;
}
.comments-info .left{
  color: black;
  font: 700;
}
.user{
   position: relative;
   padding: 40px;
}
.user img{
  position: absolute;
  width: 40px;
  height: 40px;
  top: 20px;
  left: 20px;
  border-radius: 20px ;
}
.username{
  position: absolute;
  top: 30px;
  left: 65px;
  font-weight: 800;
}
.user-comments{
  line-height: 30px;
}
.style{
  padding: 5px;
  position: relative;
  left: 50px;
  font-size: 13px;
  color: #e2d3d3;
}
.reply{
  height: 100%;
  width: 100%;
  background-color: peachpuff;
  line-height: 20px;
}
</style>