/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:45
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 12:24:52
*/

'use strict'

const utils = require('../utils/')
const debug = utils.debug
const path = require('path')
const fs = require('fs')

/**
* require当前目录下除了index.js之外所有的js文件，然后传入router参数执行其init方法
*/
module.exports.init = (router) => {
  let files = fs.readdirSync(__dirname)
  files.forEach((item) => {
    if(/\.js$/.test(item) && item !== 'index.js') {
      require('./' + item).init(router)
    }
  })
}
