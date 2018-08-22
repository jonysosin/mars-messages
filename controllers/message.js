const APP_ID = '5b7c61b228909c00220958f5'
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

  async sendMessage (userId, message) {
    const response = await this.smooch.appUsers.sendMessage({
      appId: APP_ID,
      userId: userId,
      message
    })

    console.log(`Response of send: ${response}`)
  }

  async onReceiveMessage (data) {
    const userId = data.appUser._id
    console.log(`I received a message of: ${userId}`)
    this.sendMessage(userId, {
      role: 'appMaker',
      type: 'image',
      text: 'Hello!',
      mediaUrl: 'https://uploads-ssl.webflow.com/589c81e8313ec1b057657bc4/5a09b287e1339f0001a80a2b_octopuspng-p-1080.png',
      actions: [
        {
          text: 'Sirena!',
          type: 'link',
          uri: 'getsirena.com'
        }
      ]
    })
  }

  async on (data) {
    if (data.trigger) {
      switch (data.trigger) {
        case 'message:appUser':
          this.onReceiveMessage(data)
          break
        default:
          console.log(data)
          break
      }
    }
  }
}
