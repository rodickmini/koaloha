/*
* @Author: caiyou
* @Date:   2016-12-14 17:58:43
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 17:29:08
*/

'use strict'

const utils = require('../utils')
const tokenVerify = require('../middlewares/token-verify')

module.exports.init = (router) => {
  router.get('/books', tokenVerify, getBookList)
}

function* getBookList() {
  this.body = [
    this.token,
    {
      id: 1,
      name: '小时候'
    },{
      id: 2,
      name: '骆驼祥子'
    }
  ]
}