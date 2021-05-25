<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list class="cart-list" :cart-list="cartList"></cart-list>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childrencomponents/CartList'
import BottomBar from './childrencomponents/BottomBar'
import Scroll from '../../components/common/scroll/Scroll'
export default {
name:'ShopCart',
components:{
  NavBar,
  CartList,
  BottomBar,
  Scroll,
},
computed:{
    //  ...mapGetters(['cartLength','cartList'])
  cartLength(){
    return this.$store.state.cartList.length
  },
  cartList() {
		return this.$store.state.cartList
  },
},
activated(){
  this.$refs.scroll.refresh()
}
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 600;
  }
  .cart{
    height:100vh;
    width: 100%;
    position: relative;
  }
  .content{
    /* height: calc(100% - 44px - 49px); */
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>