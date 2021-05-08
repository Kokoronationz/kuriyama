const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
        let res = await fetch(global.API('xteam', '/randomimage/manga', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*©Kuriyama-bot*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['doujin']
handler.tags = ['nsfw']
handler.command = /^(doujin)$/i
handler.premium = true
handler.register = true

module.exports = handler