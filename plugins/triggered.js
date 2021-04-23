//Thanks Nobuyaki:D

const uploadImage = require('../lib/uploadImage') 
//const { sticker } = require('../lib/sticker')
//const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let triggered = `https://some-random-api.ml/canvas/triggered?avatar=${url}`
  //let stiker = await sticker(null, triggered, 'triggered', '@Kokoronationz')
  conn.sendFile(m.chat, triggered, 'trigger.gif', '@Kokoronationz', m)
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['trigger (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^trigger/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler