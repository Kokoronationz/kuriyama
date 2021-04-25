let axios = require("axios");
let handler = async function (m, { text, isPrems, isOwner }) {
	
    
    await m.reply('Searching...')
  let gen = await axios.get('https://videfikri.com/api/infogempa/')
  let res = gen.result
  let hasil = `*Wilayah:* ${res.wilayah}\n*Bujur:* ${res.bujur}\n*Lintang:* ${res.lintang}\n*Waktu:* ${res.waktu}\n*Magnitudo:* ${res.magnitudo}\n*Kedalaman:* ${res.kedalaman}`
     conn.reply(m.chat,  hasil, m)
}
handler.help = ['infogempa']
handler.tags = ['info']
handler.command = /^(infogempa|gempa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
