import axios from 'axios'
import qs from 'qs'
// 1. 生成 Axios 的伪实例, instance不是真正new Axios，但是拥有axios实例的所有属性和方法
const instance = axios.create({
  baseURL: '/api'
})
// 2. 添加请求拦截器, 理解： 即将要发送请求的时候，将请求拦截下来，对当前的请求批量处理，如： 添加token，修改请求的参数
instance.interceptors.request.use(config => {
 
  return config
})

// 3. 设置响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
  }
)
const instance1 = axios.create({
  baseURL: '/163'
})


export default instance
