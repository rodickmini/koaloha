/*
* @Author: caiyou
* @Date:   2016-12-14 17:58:43
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 20:45:12
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const mongoose = require('mongoose')

module.exports.init = (router) => {
  router.post('/articles', newArticle)
}

function* newArticle() {
  let data = this.request.data

  var Cat = mongoose.model('Cat', { name: String });

  var kitty = new Cat({ name: 'Rodick' });
  const result = yield kitty.save().catch(err => {
    debug(500,'内部错误')
  });
  kitty.save(function (err) {
    if (err) {
      debug(err);
    } else {
      debug('meow');
    }
  }); 

  this.body = {
    code: 0
  }
}