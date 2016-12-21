/*
* @Author: caiyou
* @Date:   2016-12-15 20:44:42
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-21 20:24:42
*/

'use strict'
const mongoose = require('mongoose')

let ArticleSchema, ArticleModel

ArticleSchema = new mongoose.Schema({
  title: String,
  abstract: String,
  content: String,
  author: String,
  createTime: Date,
  tags: [String]
})

ArticleModel = mongoose.model('Article', ArticleSchema)

module.exports = ArticleModel