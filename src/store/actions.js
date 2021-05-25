export default{
    addCart(context,payload){
      // let oldProduct = null
      // for(let item of state.cartList){
      //   if(item.iid == disload.iid){
      //     oldProduct = item
      //   }
      return new Promise((resolve,reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid===payload.iid)
        if(oldProduct){
      // oldProduct.count += 1
          context.commit('addCounte',oldProduct)
          resolve('商品数量+ 1')
          }else{
            payload.count = 1
            context.commit('addCartList',payload)
            resolve('商品添加成功')
        }
      })
}
  }