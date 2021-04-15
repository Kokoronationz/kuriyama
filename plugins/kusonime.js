let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Masukkan judul anime...'
  let res = await fetch(global.API('xteam', '/anime/kusonime?q=', {
    anime: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    anime,
    title,
    thumb,
    info,
    sinopsis,
    link_dl
  } = json.result.user
  let pp = thumb
  let caption = `
Anime : ${anime},
Title : ${title},
Info : ${info},
Sinopsis : ${sinopsis},
Link : ${link_dl},
`.trim()
  if (pp) conn.sendFile(m.chat, pp, 'ppnime.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['kusonime'].map(v => v + ' <anime>')
handler.tags = ['']

handler.command = /^(kusonime)$/i
handler.group = true
handler.premium = true
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler