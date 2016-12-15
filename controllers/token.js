/*
* @Author: caiyou
* @Date:   2016-12-14 17:06:12
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-15 18:38:06
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')
const config = require('../config')

module.exports.init = (router) => {
  router.post('/tokens', create)
}

function* create() {
  let code = this.request.body.code
  if(code) {
    let url = `${config.wx.jscode2session_url}?appid=${config.wx.appid}&secret=${config.wx.secret}&js_code=${code}&grant_type=authorization_code`
    let openReturn = yield utils.proxy.call(this, url)
    if(!openReturn.errcode) {
      const token = jwt.sign({
        code: code,
        session_key: openReturn.session_key,
        openid: openReturn.openid,
        wx_expires_in: openReturn.expires_in
      }, config.jwt.key)
      this.status = 200
      this.body = {
        code: 0,
        data: {
          token: token
        }
      }
    }else {
      debug("微信jscode2session_url出错：%o", openReturn)
      this.throw(401, openReturn.errmsg)
    }
    
  }else {
    this.throw(401, 'invalid wx code')
  }
}
