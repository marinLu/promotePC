import axios from 'axios'
import router from '@/router'
let config = process.env
axios.defaults.timeout = 15000
// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8'
    }
    if (window.localStorage.getItem('token-JWT')) {
      config.headers['authorization'] = 'Bearer ' + window.localStorage.getItem('token-JWT')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('错误请求')
          break
        case 401:
          router.push('/')
          console.log('未授权，请重新登录')
          break
        case 403:
          console.log('拒绝访问')
          break
        case 404:
          console.log('请求错误,未找到该资源')
          break
        case 405:
          console.log('请求方法未允许')
          break
        case 408:
          console.log('请求超时')
          break
        case 500:
          console.log('服务器端出错')
          break
        case 501:
          console.log('网络未实现')
          break
        case 502:
          console.log('网络错误')
          break
        case 503:
          console.log('服务不可用')
          break
        case 504:
          console.log('网络超时')
          break
        case 505:
          console.log('http版本不支持该请求')
          break
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      console.log(`连接到服务器失败${err}`)
    }
    return Promise.resolve(err.response)
  }
)
export function fetch (url, params = {}) {
  url = config.API_URL + url
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export function post (url, data = {}) {
  // data.head = User.getRequestHeader().head
  return new Promise(async (resolve, reject) => {
    url = config.API_URL + url
    // console.log(JSON.stringify(data))
    await axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    ).catch(() => {
      return this.$message.error('网络错误')
    })
  })
}
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
export const server = {
  post: post,
  fetch: fetch,
  patch: patch,
  put: put
}
// export default {
//   install: function (Vue, Option) {
//     Object.defineProperty(Vue.prototype, '$http', { value: axios })
//   }
// }
// // 所有http请求统一管理
// export function createPeople () {

// }
