let axios = require("axios");
let handler = async function (m, { text, isPrems, isOwner }) {
	
    
    await m.reply('Searching...')
  axios.get('https://videfikri.com/api/infogempa/').then((res) => {
    
  let hasil =  res.data.result.map(res=>`*Wilayah:* ${res.wilayah}\n*Bujur:* ${res.bujur}\n*Lintang:* ${res.lintang}\n*Waktu:* ${res.waktu}\n*Magnitudo:* ${res.magnitudo}\n*Kedalaman:* ${res.kedalaman}`)
     conn.reply(m.chat,  hasil, m)
  })
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
