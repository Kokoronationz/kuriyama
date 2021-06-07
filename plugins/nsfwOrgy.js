const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
      let tnbot = (await conn.getFile(await conn.getProfilePicture(m.fromMe))).data.toString('base64')
        let res = await fetch(global.API('xteam', '/randomimage/orgy', {}, 'APIKEY'))
        let img = await res.buffer()
        await conn.sendFile(m.chat, img, 'img.png', '*©Kuriyama-bot*', m, false, { thumbnail: tnbot} )
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['orgy']
handler.tags = ['nsfw']
handler.command = /^(orgy)$/i
handler.private = true
handler.premium = true
handler.register = true

module.exports = handler