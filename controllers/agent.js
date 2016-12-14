/*
* @Author: caiyou
* @Date:   2016-12-14 17:58:43
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-14 19:58:57
*/

'use strict'

const utils = require('../utils')

module.exports.init = (router) => {
  router.get('/agents', getAgentList)
}

function* getAgentList() {
  utils.debug('get agent list...')

  this.body = [
    {
      id: 1,
      name: '内部测试网点'
    },{
      id: 2,
      name: '人和车合'
    }
  ]
}