/*
* @Author: caiyou
* @Date:   2016-12-15 20:44:42
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 15:01:10
*/

'use strict'
const mongoose = require('mongoose')

let SiteSchema, SiteModel

SiteSchema = new mongoose.Schema({
  siteName: String,
  author: String
})

SiteModel = mongoose.model('Site', SiteSchema)

module.exports = SiteModel
