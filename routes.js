'use strict'

const Router = require('koa-router')
const router = new Router()
const MessageController = require('./controllers/message')
let messageController = new MessageController()

router.get('/status', (ctx) => {
  ctx.body = { status: 'online' }
})

router.all('/webhook', async(ctx) => {
  await messageController.onReceiveMessage(ctx.request.body)
  ctx.body = { status: 'OK' }
})

router.all('/test-webhook', async(ctx) => {
  // const smooch = new SmoochCore({
  //   keyId: 'app_5b7d97b20260730022c2116b',
  //   secret: 'jdKm9NzyC1v_GSqh60sV1NZysavrVVugRgYvqmYYdqCQ_006RwTe0IFwt_6Io3ujX35X5jpbjy1tXHoXVTANHQ',
  //   scope: 'app' // account or app
  // })
  // const response = await smooch.appUsers.sendMessage({
  //   appId: '5b7c61b228909c00220958f5',
  //   userId: 'ed85fd7224dd6a6856cf0fc1',
  //   message: {
  //     type: 'text',
  //     text: 'Just put some vinegar on it',
  //     role: 'appMaker'
  //   }
  // })

  // console.log(response)
})

module.exports = router
