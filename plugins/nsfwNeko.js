const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply('Searching...')
        let res = await fetch(global.API('xteam', '/randomimage/nsfwneko', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*©Kuriyama-bot*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i
handler.premium = true
handler.register = true

module.exports = handler