/*
* @Author: caiyou
* @Date:   2016-12-21 20:36:55
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-22 14:43:36
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
    return api.get(`articles?start=${params.start}&limit=${params.limit}`)
  },
  getDetail: function(id) {
    return api.get(`articles/${id}`)
  }
}