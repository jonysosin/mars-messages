console.log(3333)
'use strict'

/**
 * App init
 * WARNING: avoid requiring app modules here because the app isn't ready yet
 */
const path = require('path')

const Koa = require('koa')
const init = async function init () {
  /**
   * Koa app
   */
  const app = new Koa()

  const bodyParser = require('koa-bodyparser')
  const xmlParser = require('koa-xml-body') 
  const routes = require('./routes')

  const server = app
    .use(xmlParser({
      xmlOptions: { attrkey: 'attributes', charkey: 'val', explicitArray: false }
    }))
    .use(bodyParser())
    .use(routes.routes())
    .listen(8080)
}

module.exports.module = module

module.exports = init()