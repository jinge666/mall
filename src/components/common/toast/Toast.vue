<template>
  <div class="toast">
    <div :v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
name:"Toast",
props:{
  message:{
    type:String,
    default:''
  },
  isShow:{
    type:Boolean,
    default:false
  }
}
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  color: #ffffff;
  background-color: rgba(0,0,0, .75);
  transform: translate(-70%, -50%);
  font-size: 25px;
  /* padding: 8px 10px; */
}
</style>