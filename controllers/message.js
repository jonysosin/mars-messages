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

  async sendMessage () {
    return this.smooch.appUsers.sendMessage({
      appId: APP_ID,
      userId: USER_ID,
      message: {
        type: 'text',
        text: 'Just put some vinegar on it',
        role: 'appMaker'
      }
    })
  }

  onReceiveMessage (data) {
    console.log(`ID DE USUARIO ${data.app._id}`)
  }
}
