console.log(3333)
'use strict'

/**
 * Promise setup -- register bluebird as preferred promise implementation.
 * We need to do this before importing libraries or using async functions.
 */
require('any-promise/register/bluebird')
require('app-module-path').addPath('./src/libs')

/**
 * App init
 * WARNING: avoid requiring app modules here because the app isn't ready yet
 */
const findRoot = require('find-root')
const path = require('path')
const { stripIndent } = require('common-tags')

const Koa = require('koa')
const winston = require('winston')

const init = async function init () {
  /**
   * Package
   */
  const root = findRoot(__dirname)
  const pkg = require(path.join(root, 'package.json'))

  /**
   * Koa app
   */
  const app = new Koa()

  const co = require('co')
  const render = require('koa-swig')
  const bodyParser = require('koa-bodyparser')
  const xmlParser = require('koa-xml-body') 
  const routes = require('./routes')

  // Frontend render
  app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: false, // disable, set to false
    ext: 'html',
    writeBody: false
  }))

  const server = app
    .use(xmlParser({
      xmlOptions: { attrkey: 'attributes', charkey: 'val', explicitArray: false }
    }))
    .use(bodyParser())
    .use(routes.routes())
    .listen(80)
}

module.exports.module = module

module.exports = init()