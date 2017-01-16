/*
* @Author: caiyou
* @Date:   2016-12-15 20:44:42
* @Last Modified by:   caiyou
* @Last Modified time: 2017-01-16 15:18:37
*/

'use strict'
const mongoose = require('mongoose')

let ArticleSchema, ArticleModel

ArticleSchema = new mongoose.Schema({
  title: String,
  abstract: String,
  content: String,
  author: String,
  createTime: String,
  lastUpdateTime: String,
  tags: [String],
  isDeleted: { type: Boolean, default: false },
  pv: { type: Number, default: 0 }
})

ArticleModel = mongoose.model('Article', ArticleSchema)

module.exports = ArticleModel