let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('http://api-iam.herokuapp.com/api/cersex')
  let cersex = await url.json()
let hasil = `
_*➸ Judul: ${cersex.result.judul}*_
➸ *Cerita:* _${cersex.result.cersex}_
`.trim()

//  m.reply(hasil)
 conn.fakeReply(m.chat, hasil,'0@s.whatsapp.net', '*JANGAN COLI BRO:V*','status@broadcast')
//  conn.sendFile(m.chat, cersex.result.img, 'img.jpg', hasil, m)
}
handler.help = ['cersex']
handler.tags = ['nsfw']
handler.command = /^cersex$/i
handler.group = true
handler.premium = true
handler.register = true

module.exports = handler
