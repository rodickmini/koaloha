/*
* @Author: caiyou
* @Date:   2016-12-14 15:11:11
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 17:22:53
*/

'use strict'

let app = require('koa')(),
  co = require('co'),
  router = require('koa-router')(),
  bodyParser = require('koa-bodyparser'),
  onerror = require('koa-onerror'),
  controllers = require('./controllers/'),
  utils = require('./utils/'),
  debug = utils.debug

co(function * () {

  /**
  * 错误处理，出错会返回一个html页面，显示错误信息，NODE_ENV设置为非development时不显示trackback
  */
  onerror(app)

  /**
  * 解析请求体，通过this.request.body可以取到，请求头Content-Type必须显式设置，例如：application/json
  */
  app.use(bodyParser())

  /**
  * controller语法糖，分文件组织
  */
  controllers.init(router)
  app.use(router.routes())

  app.listen(3000)
  debug(process.env.npm_package_name + ' is listening at PORT: %d', 3000)
}).catch((err) => {
  debug(err.stack)
})
