let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('Searching...')
let str = `
TOBAT BODO
`.trim()

    axios.get('http://api-melodicxt-2.herokuapp.com/api/random/hentai?apiKey=APIKEY')
    .then((res) => {
      imageToBase64(res.data.result.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        })
    })
}
handler.help = ['hentai2']
handler.tags = ['nsfw']
handler.command = /^(hentai2)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
