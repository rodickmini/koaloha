/*
* @Author: caiyou
* @Date:   2016-12-20 15:52:58
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 16:08:53
*/

'use strict'
let host = "http://localhost:3000/"

export default {
  post: function(url, params={}, headers={}) {
    var init = {
      method: 'POST',
      body: JSON.stringify(params)
    }
    url = host + url
    return fetch(url, init)
  }
}