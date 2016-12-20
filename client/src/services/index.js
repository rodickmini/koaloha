/*
* @Author: caiyou
* @Date:   2016-12-20 15:52:58
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 20:58:29
*/

'use strict'
const host = "http://localhost:3000/"

let hd = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
})

let storage = window.localStorage
let token = storage.getItem('koaloha_token')
if(token) {
  hd.append('Authorization', token)
}

/**
* 解析response，调用response.json()方法后返回一个Promise，其resolve参数为返回的消息体
*/
function parseResponse (response) {
  return Promise.all([response.status, response.statusText, response.json()])
}

/**
* 根据传进来的参数status判断返回是否成功
* 如果成功则把response.json()解析出来的数据返回
* 如果失败则将HTTP状态码、HTTP标准错误信息、后端返回的具体错误信息包装成一个对象，返回给调用者，调用者在catch中处理
*/
function checkStatus ([status, statusText, data]) {
  if(status >= 200 && status < 300){
    return data
  }else{
    let error = {
      status: status,
      status_text: statusText,
      err_msg: data.error
    }
    return Promise.reject(error)
  }
}
/**
* GET POST PUT PATCH DELETE
*/
export default {
  get: function(url, params={}) {
    const init = {
      method: 'GET',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse).then(checkStatus)
  },
  post: function(url, params={}) {
    const init = {
      method: 'POST',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse).then(checkStatus)
  },
  put: function(url, params={}) {
    const init = {
      method: 'PUT',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse).then(checkStatus)
  },
  patch: function(url, params={}) {
    const init = {
      method: 'PATCH',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse).then(checkStatus)
  },
  delete: function(url, params={}) {
    const init = {
      method: 'DELETE',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse).then(checkStatus)
  }
}