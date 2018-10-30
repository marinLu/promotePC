import axios from 'axios'
import Vue from 'vue'
import router from '../../router'


var that = new Vue()

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = ''; // 请求根路径
axios.defaults.withCredentials = false;


//POST传参序列化
axios.interceptors.request.use((config) => {
  /*if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }*/
  var token = localStorage.getItem("token");
  if (token) {
    // 同域处理
    config.headers.common.token = token;
    config.headers.token && (config.headers.token = token);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


const SUCCESS = "00"; // 成功
const INVALID_TOKEN = "1006"; // token失效

//返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code === SUCCESS) {
    return Promise.resolve(res);
  }
  if(res.data.code === INVALID_TOKEN) {
    localStorage.removeItem("token")
    router.push('/login')
  }
  return Promise.reject(res);
}, (error) => {
  return Promise.reject(error);
});


export default function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

