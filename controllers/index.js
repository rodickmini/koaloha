/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:45
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-14 20:01:35
*/

'use strict'

const utils = require('../utils/')
const debug = utils.debug
const path = require('path')
const fs = require('fs')

module.exports.init = (router) => {
  let files = fs.readdirSync(__dirname)
  files.forEach((item) => {
    if(/\.js$/.test(item) && item !== 'index.js') {
      require('./' + item).init(router)
    }
  })
}
