/*
* @Author: caiyou
* @Date:   2016-12-15 17:33:35
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 18:21:28
*/

'use strict'

const _ = require('lodash')

let config = {
  jwt: {
    key: 'koa aloha'
  },
  wx: {
    jscode2session_url: 'https://api.weixin.qq.com/sns/jscode2session',
    
  }
}

if(process.env.COMPANY === 'heqiauto') {
  config = _.merge(config, require('./hq'));
}

module.exports = config