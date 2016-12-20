/*
* @Author: caiyou
* @Date:   2016-12-14 17:22:23
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 18:28:40
*/

'use strict'

const debug = require('debug')('koaloha')
const fetch = require('node-fetch')

module.exports = {
  debug: debug,
  proxy: function(...args) {
    return fetch.apply(null, args)
    .then(res=> {
      return res.json();
    })
    .catch(err=> {
      debug(err);
      this.throw(500, '[proxy]内部错误');
    });
  }
}