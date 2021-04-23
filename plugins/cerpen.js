let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('http://api-iam.herokuapp.com/api/cerpen')
  let cerpen = await url.json()
let hasil = `
_*➸ Judul: ${cerpen.result.title}*_
➸ *Pengarang:* _${cerpen.result.pengarang}_
➸ *Kategori:* _${cerpen.result.kategori}_
➸ *Cerita:* _${cerpen.result.cerpen}_
`.trim()

  m.reply(hasil)
}
handler.help = ['cerpen']
handler.tags = ['fun']
handler.command = /^cerpen$/i
handler.group = true
handler.register = true

module.exports = handler
