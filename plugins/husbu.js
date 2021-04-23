let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA')
 let { image, name } = await res.json()
 let hasil = `*Nama :* ${name}`
 conn.sendFile(m.chat, image, 'image.jpg', hasil, m)
}
handler.help = ['husbu']
handler.tags = ['weebs']
handler.command = /^husbu$/i
handler.fail = null
handler.group = true

module.exports = handler
