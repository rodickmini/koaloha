/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 15:05:36
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const config = require('../config')
const SiteModel = require('../models/site')

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
  debug('this.request.body: %o', this.request.body)
  let data = this.request.body
  let result = yield new SiteModel({
    siteName: data.site_name,
    author: data.author_name
  }).save().catch(err => {
    this.trow(500, err)
  })

  if(result) {
    yield this.render('install-success')
  }
}
