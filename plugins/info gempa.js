let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	
    
    await m.reply('Searching...')
  let res = await fetch('https://videfikri.com/api/infogempa/')
let json= await res.json()
  const hasil =  `*Wilayah:* "${json.wilayah}"\n*Bujur:* ${json.bujur}\n*Lintang:* ${json.lintang}\n*Waktu:* ${json.waktu}\n*Magnitudo:* ${json.magnitudo}\n*Kedalaman:* ${json.kedalaman}`
     conn.reply(m.chat,  hasil, m)
}
handler.help = ['infogempa']
handler.tags = ['info']
handler.command = /^(info?)gempa$/i
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
