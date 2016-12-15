/*
* @Author: caiyou
* @Date:   2016-12-15 16:45:45
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 17:27:25
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const jwt = require('jsonwebtoken')
const co_verify = function(token, secretOrPublicKey) {
  return function(cb) {
    jwt.verify(token, secretOrPublicKey, cb)
  }
}

module.exports = function* (next) {
  //获取HTTP请求头中的Authorization值
  const tokenFromClient = this.get('Authorization')
  debug('tokenFromClient: %s', tokenFromClient)

  try {
    const decoded = yield co_verify(tokenFromClient, 'koa aloha')
    debug('decoded: %o', decoded)
    this.token = decoded//将解析出来的obj挂载在this.token对象上
  }catch(err) {
    debug(err)
    this.throw(401, err.name)//无效jwt直接抛出错误
  }
  return yield next
}