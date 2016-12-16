/*
* @Author: caiyou
* @Date:   2016-12-14 17:58:43
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 12:36:17
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const mongoose = require('mongoose')
const tokenVerify = require('../middlewares/token-verify')
const ArticleModel = require('../models/article')

module.exports.init = (router) => {
  router.post('/articles', tokenVerify, newArticle)
  router.get('/articles', tokenVerify, getArticles)
}

function* newArticle() {
  let data = this.request.body

  debug('data: %o', data)

  if(!data.title || data.title === '') {
    this.throw(400, '文章标题不能为空')
  }
  if(!data.content || data.content === '') {
    this.throw(400, '文章正文不能为空')
  }

  let result = yield new ArticleModel({
    title: data.title,
    content: data.content,
    author: data.author,
    createTime: +new Date(),
    tags: data.tags
  }).save().catch(err => {
    debug(500, 'save article failed')
  })

  debug('save article result: %o', result)

  this.status = 201
  this.body = {
    code: 0,
    data: {
      id: result._id
    }
  }
}

function* getArticles() {
  debug('query, %o', this.query)

  let start = this.query.start || 0
  let limit = this.query.limit || 10
  let articles = yield ArticleModel.find().skip(~~start).limit(~~limit)
  debug('articles: %o', articles)
  this.status = 200
  this.body = {
    code: 0,
    data: {
      articles: articles
    }
  }
}


