'use strict'

const Router = require('koa-router')
const smooch = require('smooch-core')
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
  const response = await smooch.appUsers.sendMessage({
    appId: '5b7c61b228909c00220958f5',
    userId: 'app_5b7d97b20260730022c2116b',
    message: {
      type: 'text',
      text: 'Just put some vinegar on it',
      role: 'appMaker'
    }
  })

  console.log(response)
})

module.exports = router
