import Axios from 'axios'

export function request(config) {
  const net = Axios.create({
    baseURL : "http://123.207.32.32:8000/api/wh",
    timeout:3000
  })

//拦截器
  net.interceptors.response.use(res => {
      return res.data;
    }, err =>{
      console.log(err);
  });

  //返回promise
  return net(config)
}
