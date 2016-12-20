/*
* @Author: caiyou
* @Date:   2016-12-14 15:11:11
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 16:34:24
*/

'use strict'

let app = require('koa')(),
  co = require('co'),
  router = require('koa-router')(),
  bodyParser = require('koa-bodyparser'),
  cors = require('kcors'),
  onerror = require('koa-onerror'),
  mongoose = require('mongoose'),
  render = require('koa-ejs'),
  path = require('path'),
  staticFile = require('koa-static'),
  controllers = require('./controllers/'),
  utils = require('./utils/'),
  debug = utils.debug

/**
* mongoose's default promise library is deprecated
*/
mongoose.Promise = global.Promise

co(function * () {

  /**
  * 错误处理，出错会返回一个html页面，显示错误信息，NODE_ENV设置为非development时不显示trackback
  */
  onerror(app)

  /**
  * koa-ejs模板配置
  */
  render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,//开启后会将模板缓存在内存中
    debug: true
  })

  /**
  * mongodb连接
  */
  mongoose.connect('mongodb://localhost/koaloha')

  /**
  * 解析请求体，通过this.request.body可以取到，请求头Content-Type必须显式设置，例如：application/json
  */
  app.use(bodyParser())

  /**
  * 打开跨域请求
  */
  app.use(cors())

  /**
  * 静态文件server，允许浏览器缓存7天
  */
  app.use(staticFile('static', {
    maxage: 1000 * 60 * 60 * 24 * 7
  }))

  /**
  * controller语法糖，分文件组织
  */
  controllers.init(router)
  app.use(router.routes())

  app.listen(3000)
  debug(process.env.npm_package_name + ' is listening at PORT: %d', 3000)
}).catch((err) => {
  debut('co的锅...')
  debug(err.stack)
})
