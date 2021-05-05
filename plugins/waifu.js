let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
 let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/waifu')
 let { desc, image, name, source } = await res.json()
 let hasil = `*DESC :* ${desc}\n*NAMA :* ${name}\n*URL :* ${source}`
 conn.sendFile(m.chat, image, 'image.png', hasil, m)
}
handler.help = ['waifu']
handler.tags = ['weebs']
handler.command = /^waifu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
