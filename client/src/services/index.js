/*
* @Author: caiyou
* @Date:   2016-12-20 15:52:58
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 17:59:38
*/

'use strict'
const host = "http://localhost:3000/"

function parseResponse (response) {
  return Promise.all([response.status, response.statusText, response.json()])
}

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

export default {
  post: function(url, params={}) {
    let hd = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
    const init = {
      method: 'POST',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse).then(checkStatus)
  }
}