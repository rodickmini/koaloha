/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-14 20:09:30
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug

module.exports.init = (router) => {
  router.get('/session', getSession)
  router.post('/session', login)
}

function* getSession() {
  debug('get Session...')
  this.body = {
    name: 'caiyou',
    sex: 'male'
  }
}

function* login() {
  debug('login..')
  debug(this.request.body)
  this.body = {
    code: 0
  }
}
