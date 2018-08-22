const APP_ID = '5b7c61b228909c00220958f5'
const USER_ID = 'ed85fd7224dd6a6856cf0fc1'
const KEY_ID = 'app_5b7d97b20260730022c2116b'
const SECRET = 'jdKm9NzyC1v_GSqh60sV1NZysavrVVugRgYvqmYYdqCQ_006RwTe0IFwt_6Io3ujX35X5jpbjy1tXHoXVTANHQ'
const SmoochCore = require('smooch-core')

module.exports = class Message {
  constructor () {
    this.smooch = new SmoochCore({
      keyId: KEY_ID,
      secret: SECRET,
      scope: 'app' // account or app
    })
  }

  async sendMessage (userId) {
    // return this.smooch.appUsers.sendMessage({
    //   appId: APP_ID,
    //   userId: userId,
    //   message: {
    //     role: 'appMaker',
    //     type: 'image',
    //     text: 'Hello!',
    //     mediaUrl: 'https://uploads-ssl.webflow.com/589c81e8313ec1b057657bc4/5a09b287e1339f0001a80a2b_octopuspng-p-1080.png'
    //     // actions: [
    //     //   {
    //     //     text: 'Hola! Soy un pulpo',
    //     //     type: 'link',
    //     //     uri: 'https://uploads-ssl.webflow.com'
    //     //   }
    //     // ]
    //   }
    // })
  }

  async onReceiveMessage (data) {
    const userId = data.appUser._id
    console.log(userId)
    await this.sendMessage(userId)
  }

  async on (data) {
    console.log(data)
  }
}
