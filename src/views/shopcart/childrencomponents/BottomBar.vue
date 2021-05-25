<template>
  <div class="bottom-menu">
    <check-button class="select-all" 
                  :class="{isChecked: isSelectAll}"
                  @click.native = "checkClick" ></check-button>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import {mapGetters} from 'vuex'
	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
  computed:{
     ...mapGetters(['cartLength','cartList']),
    totalPrice(){
      return this.$store.state.cartList.filter( item => {
        return item.checked == true
        }).reduce((preValue,item) => {
          return preValue+item.newPrice * item.count
          },0).toFixed(2)
    },
    cartCount(){
      return (this.$store.state.cartList.filter( item => {
        return item.checked ==true
      }).length)
    },
    isSelectAll(){
      if (!this.cartList.length) {
        return false
      }else{
      //   return !this.cartList.filter(item => {
      //   return !item.checked
      // }).length
      //  return !this.cartList.find(item => {
      //    return !item.checked
      //  })
      for(let item of this.cartList){
        if(!item.checked){
          return false
        }
      }
      return true
    }
    }
  },
  methods:{
    checkClick(){
      // console.log('点击全选')
      if (this.isSelectAll) {
        this.cartList.forEach(item => {
          item.checked = false
        });
      }else{
        this.cartList.forEach(item => {
          item.checked = true
        })
      }
    }
  },
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
  .isChecked{
    background-color: #ff8198;
    border-radius:50%;
    border: 0;
  }
</style>
