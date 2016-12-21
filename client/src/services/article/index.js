/*
* @Author: caiyou
* @Date:   2016-12-21 20:36:55
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-21 20:37:52
*/

'use strict'

import api from "../index"

export default {
  addOne: function(title, abstract, content) {
    return api.post('articles', {title, abstract, content})
  }
}