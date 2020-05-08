import Axios from 'axios'

export function request(config) {
  const net = Axios.create({
    //此处错误端口
    baseURL : "http://123.207.32.32:8000/api/m3",
    timeout:3000
  })

//响应拦截
  net.interceptors.response.use(res => {
      return res.data;
    }, err =>{

  });
  //请求拦截器
  // net.interceptors.request.use(config =>{
  //
  // });
  //返回promise
  return net(config)
}


