/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 14:52:32
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const config = require('../config')

module.exports.init = (router) => {
  router.get('/install', showInstallPage)
  router.post('/siteinfo', configSiteInfo)
}

function* showInstallPage() {
  yield this.render('install', {
    test: '哈哈哈哈哈哈'
  })
}

function* configSiteInfo() {
  debug('config site info...')
  debug('this.request.body: %o', this.request.body)
}
