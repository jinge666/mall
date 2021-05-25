<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div >
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
name:'DetailBottonBar',
 methods:{
  cartClick(){
    this.$emit('cartClick')
  }
}
}
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    height: 49px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 69px;
    /* position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%; */
    background-color: #ffffff;
    display: flex;
    text-align: center;
  }
  .bar-left{
    flex: 1;
    display: flex;
  }
  .bar-left div{
    flex: 1;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
  .bar-right{
    flex: 1;
    display: flex;
  }
  .bar-right div{
    flex: 1;
    line-height: 49px;
  }
  .bar-right .cart{
    background-color: #ffe817;
    color: black;
  }
  .bar-right .buy{
    background-color: #f69;
    color: blanchedalmond;
  }
</style>