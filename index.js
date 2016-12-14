/*
* @Author: caiyou
* @Date:   2016-12-14 15:11:11
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-14 20:38:12
*/

'use strict'

let app = require('koa')(),
  co = require('co'),
  router = require('koa-router')(),
  bodyParser = require('koa-bodyparser'),
  controllers = require('./controllers/'),
  utils = require('./utils/'),
  debug = utils.debug

co(function * () {

  app.use(bodyParser())

  controllers.init(router)
  app.use(router.routes())

  app.listen(3000)
}).catch((err) => {
  debug(err.stack)
})
