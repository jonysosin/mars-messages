'use strict'

const Router = require('koa-router')
const router = new Router()

router.get('/status', (ctx) => {
  ctx.body = { status: 'online' }
})

router.all('/webhook', async(ctx) => {
  console.log(JSON.stringify({ get: ctx.query, post: ctx.request.body }, null, 2))
  if (ctx.query['hub.challenge']) {
    ctx.body = ctx.query['hub.challenge']
  } else {
    ctx.body = { status: 'OK' }
  }
})

router.all('/test-webhook', async(ctx) => {
  console.log('Webhook for testing')
  console.log(JSON.stringify({ get: ctx.query, post: ctx.request.body }, null, 2))
})

module.exports = router
