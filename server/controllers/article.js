/*
* @Author: caiyou
* @Date:   2016-12-14 17:58:43
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-22 14:19:11
*/

'use strict'

const utils = require('../utils')
const debug = utils.debug
const tokenVerify = require('../middlewares/token-verify')
const ArticleModel = require('../models/article')

module.exports.init = (router) => {
  router.get('/articles', getArticles)
  router.get('/articles/:id', getArticleDetail)
  router.post('/articles', tokenVerify, newArticle)
  router.patch('/articles/:id', tokenVerify, updateArticles)
}

function* newArticle() {
  let data = this.request.body

  debug('data: %o', data)

  if(!data.title || data.title === '') {
    this.throw(400, '文章标题不能为空')
  }
  if(!data.abstract || data.abstract === '') {
    this.throw(400, '文章摘要不能为空')
  }
  if(!data.content || data.content === '') {
    this.throw(400, '文章正文不能为空')
  }

  let result = yield new ArticleModel({
    title: data.title,
    abstract: data.abstract,
    content: data.content,
    author: !data.author || data.author === '' ? 'rodick' : data.author,
    createTime: +new Date(),
    tags: data.tags
  }).save().catch(err => {
    this.trow(500, err)
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
  //返回title, abstract, author, tags, createTime字段
  let articles = yield ArticleModel.find({}, {
    "title": 1,
    "abstract": 1,
    "author": 1,
    "tags": 1,
    "createTime": 1
  }).skip(~~start).limit(~~limit)
  debug('articles: %o', articles)
  this.status = 200
  this.body = {
    code: 0,
    data: {
      articles: articles
    }
  }
}

function* getArticleDetail() {
  let id = this.params.id
  debug('article id: %s', id)
  let article = yield ArticleModel.findOne().where({
    _id: id
  })
  debug('article: %o', article)
  this.status = 200
  this.body = {
    code: 0,
    data: {
      article: article
    }
  }
}

function* updateArticles() {
  let id = this.params.id
  let data = this.request.body

  debug('id: %s', id)
  debug('data: %o', data)

  if(!data.title || data.title === '') {
    this.throw(400, '文章标题不能为空')
  }
  if(!data.abstract || data.abstract === '') {
    this.throw(400, '文章摘要不能为空')
  }
  if(!data.content || data.content === '') {
    this.throw(400, '文章正文不能为空')
  }
  let result = yield ArticleModel.update({_id: id}, {
    $set: {
      title: data.title,
      abstract: data.abstract,
      content: data.content
    }
  })
  this.status = 200
  this.body = {
    code: 0,
    data: {
      result: result
    }
  }
}


