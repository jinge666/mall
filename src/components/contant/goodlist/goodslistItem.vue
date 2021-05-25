<template>
    <div class="goods-item" @click="itemClick">
      <img v-lazy="goodsItem.show.img" @load="imageItemLoad">
      <div class="goods-dsc">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect ">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
name:'goodslistItem',
props:{
  goodsItem:{
    type:Object,
    default(){
      return{}
    }
  },
},
computed:{
},
methods:{
  imageItemLoad(){
    // console.log('图片加载完成')
    this.$bus.$emit('imageItemLoad')
  },
  itemClick(){
    this.$router.push('/detail/' + this.goodsItem.iid)
  }
}
}
</script>

<style>
.goods-item{
  width: 48%;
  position: relative;
  padding-bottom: 44px;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-dsc{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  font-size: 12px;
  bottom: 5px;
  text-align: center;
}
.goods-dsc p{
  overflow: hidden;
  text-overflow: ellipsis;
   white-space: nowrap;
   margin-bottom: 3px;
}
.price{
color: var(--color-high-text);
margin-right: 20px;
}
.goods-dsc .collect {
    position: relative;
  }

  .goods-dsc .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>