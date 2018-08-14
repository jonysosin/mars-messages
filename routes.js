'use strict'

const Router = require('koa-router')
const router = new Router()

router.get('/status', (ctx) => {
  ctx.body = { status: 'online' }
})

router.all('/webhook', async(ctx) => {
    console.log(JSON.stringify({ get: ctx.query, post: ctx.request.body }, null, 2))
    ctx.body = ctx.query.hub.challenge
})

module.exports = router
