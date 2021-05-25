<template>
  <swiper>
      <swiper-item v-for="(item,index) in banner" :key = "index">
        <a :href="item.link">
          <img :src="item.image"  @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
name:'HomeSwiper',
props:{
  banner:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{isLoad:false}
},
methods:{
  imageLoad(){
    if(!this.isLoad){
      this.$emit('imageLoad')
      this.isLoad = true
    }
  }
},
components:{
  Swiper,
  SwiperItem
}
}
</script>

<style>

</style>