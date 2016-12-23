/*
* @Author: caiyou
* @Date:   2016-12-20 15:53:40
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-23 17:09:58
*/

'use strict'

import api from "../index"

export default {
  signin: function(username, password) {
    return api.post('tokens', {username, password})
  }
}