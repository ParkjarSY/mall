import Axios from 'axios'

export function request(config) {
  const net = Axios.create({
    baseURL : "http://152.136.185.210:8000/api/h3",
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


