/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-14 20:01:37
*/

'use strict'

let utils = require('../utils')

module.exports.init = (router) => {
  router.get('/session', getSession)
  router.post('/session', login)
}

function* getSession() {
  utils.debug('get Session...')
  this.body = {
    name: 'caiyou',
    sex: 'male'
  }
}

function* login() {
  utils.debug('login..')
  this.body = {
    code: 0
  }
}
