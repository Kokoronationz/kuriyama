const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {

try {
  let [text1, text2, text3] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No photo'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not supported`
  await m.reply(global.wait)
  let img = await q.download()
  let url = await uploadImage(img)
  let foto = `https://some-random-api.ml/canvas/tweet?avatar=${ur}&username=` + encodeURIComponent(text1) + `&displayname=` + encodeURIComponent(text2) + `&comment=` + encodeURIComponent(text3) + `&replies=69&likes=177013&retweets=666`
  conn.sendFile(m.chat, foto, 'twt.jpg', '*©Kuriyama-Bot*', m)
} catch (e) {
  m.reply('Conversion Failed')
  }
}

handler.help = ['tweet <username>|<displayname>|<tweet>']
handler.tags = ['maker']
handler.command = /^(tw(ee)?t)$/i
handler.limit = true
handler.register = true
module.exports = handler 