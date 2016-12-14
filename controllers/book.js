/*
* @Author: caiyou
* @Date:   2016-12-14 17:58:43
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-14 18:00:46
*/

'use strict'

const utils = require('../utils')

module.exports.init = (router) => {
  router.get('/books', getBookList)
}

function* getBookList() {
  utils.debug('get book list...')

  this.body = [
    {
      id: 1,
      name: '小时候'
    },{
      id: 2,
      name: '骆驼祥子'
    }
  ]
}