import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5"
  })
  axios.interceptors.request.use(res => {
    return res
  },err => {
    console.log(err)
  })

  axios.interceptors.response.use(res => {
    return res.data.data
  },err => {
    console.log(err)
  })
  return instance(config)
}