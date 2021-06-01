let fetch = require("node-fetch")
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
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
  let res = await fetch(`https://mnazria.herokuapp.com/api/create-meme?text-atas=` + encodeURIComponent(text1) + `&text-bawah=` + encodeURIComponent(text2) + `&background-url=${url}`
     let json = await res.json()
     let { gambar: meme } = json
  let stiker = await sticker(null, meme, 'Sticker Meme', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}

handler.help = ['stickermeme <teks>|<teks>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler