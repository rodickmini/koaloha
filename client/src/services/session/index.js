/*
* @Author: caiyou
* @Date:   2016-12-20 15:53:40
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 16:04:11
*/

'use strict'

import api from "../index"

export default {
  login: function(username, password) {
    return api.post('tokens', {username, password})
  }
}