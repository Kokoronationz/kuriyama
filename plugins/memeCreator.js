let axios = require("axios")
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let [atas, bawah] = text.split('|')
  axios.get(`https://mnazria.herokuapp.com/api/create-meme?text-atas=${atas}&text-bawah=${bawah}&background-url=${url}`)
  let hasil = `${res.data.result}`
  
  conn.sendFile(m.chat, hasil, 'meme.jpg', '@kuriyama-bot', m)
 }
}
handler.help = ['memecreate'].map(v => v + ' <text>|<text>')
handler.tags = ['creator']
handler.command = /^(memecreate)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler