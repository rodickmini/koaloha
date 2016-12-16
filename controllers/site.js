/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 14:13:26
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const config = require('../config')

module.exports.init = (router) => {
  router.get('/install', showInstallPage)
}

function* showInstallPage() {
  yield this.render('install', {
    test: '哈哈哈哈哈哈'
  })
}
