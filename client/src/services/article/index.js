/*
* @Author: caiyou
* @Date:   2016-12-21 20:36:55
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-22 13:32:11
*/

'use strict'

import api from "../index"

export default {
  addOne: function(title, abstract, content) {
    return api.post('articles', {title, abstract, content})
  },
  update: function(id, title, abstract, content) {
    return api.patch(`articles/${id}`, {title, abstract, content})
  },
  getList: function(params) {
    console.log('get list...')
    console.log(params)
    return api.get(`articles`)
  }
}