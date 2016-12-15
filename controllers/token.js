/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 17:36:51
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports.init = (router) => {
  router.post('/tokens', create)
}

function* create() {
  let code = this.request.body.code
  if(code) {
    const token = jwt.sign({
      code: code
    }, config.jwt.key)
    this.status = 200
    this.body = {
      code: 0,
      data: {
        token: token
      }
    }
  }else {
    this.throw(401, 'invalid wx code')
  }
}
