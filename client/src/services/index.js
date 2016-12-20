/*
* @Author: caiyou
* @Date:   2016-12-20 15:52:58
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 17:03:46
*/

'use strict'
const host = "http://localhost:3000/"

function parseResponse(response) {
  console.log(response.json())
  if(response.status >= 200 && response.status < 300) {
    return Promise.resolve(response.json())
  }else {
    return Promise.reject(new Error(response.statusText))
  }
}

export default {
  post: function(url, params={}) {
    let hd = new Headers()
    hd.append('Content-Type', 'application/json')
    hd.append('Accept', 'application/json')
    const init = {
      method: 'POST',
      headers: hd,
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init).then(parseResponse)
  }
}