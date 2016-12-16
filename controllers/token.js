/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 11:39:36
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')
const config = require('../config')

module.exports.init = (router) => {
  router.post('/tokens', create)
}

function* create() {
  let data = this.request.body
  let username = data.username, password = data.password
  if(!username || username === '') {
    this.throw(401, '用户名不能为空')
  }else if(!password) {
    this.throw(401, '密码不能为空')
  }else {
    if(username === 'admin' && password === md5('admin')) {
      const token = jwt.sign({
        code: code,
        session_key: openReturn.session_key,
        openid: openReturn.openid,
        wx_expires_in: openReturn.expires_in
      }, config.jwt.key)
      this.status = 200
      this.body = {
        code: 0,
        data: {
          token: token
        }
      }
    }else {
      debug('用户名或密码错误')
      this.throw(401, '用户名或密码错误')
    }
    
  }else {
    this.throw(401, 'invalid wx code')
  }
}
