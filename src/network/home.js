import{request} from './request'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeProduce(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}