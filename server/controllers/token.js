/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 16:54:22
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

module.exports.init = (router) => {
  router.post('/tokens', create)
}

function* create() {
  let data = this.request.body
  let username = data.username, password = data.password

  debug(data)
  if(!username || username === '') {
    this.throw(401, '用户名不能为空')
  }else if(!password) {
    this.throw(401, '密码不能为空')
  }else {
    debug('md5(admin): %s', md5('admin'))

    if(username === 'admin' && password === md5('admin')) {
      const token = jwt.sign({
        username: username,
        password: password
      }, config.jwt.key)
      debug('token: %o', token)
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
  }
}
