'use strict'

const Router = require('koa-router')
const router = new Router()

router.get('/status', (ctx) => {
  ctx.body = { status: 'online' }
})

module.exports = router
