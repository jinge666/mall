import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const CateGoay = () => import('../views/category/CateGoay.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const ProFile = () => import('../views/profile/ProFile.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:CateGoay
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:ProFile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
export default new Router({
  routes,
  mode:'history'
})
