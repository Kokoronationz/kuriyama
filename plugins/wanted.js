const axios = require('axios')
const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)
try {
  let [text1, text2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = await axios.get(`https://lindow-api.herokuapp.com/api/wanted?img=${url}&text=${text1}&text2=${text2}&apikey=LindowApi`)
  await conn.sendFile(m.chat, wanted, 'wanted.jpg', '©Kuriyama-bot', m)
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