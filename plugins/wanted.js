const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)
try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://videfikri.com/api/textmaker/wanted/?urlgbr=${url}&text1=${text1}&text2=${text2}`
  conn.sendFile(m.chat, wanted, 'wanted.jpg', '©Kuriyama-bot', m)
} catch (e) {
  m.reply('Conversion Failed')
  }
}
handler.help = ['wanted <name>|<text>']
handler.tags = ['creator']
handler.command = /^(wanted)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler