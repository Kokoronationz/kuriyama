let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch('https://fdciabdul.tech/api/ayla/?pesan=' + encodeURIComponent(text))
  let json = await res.json()
  if (json.status) m.reply(json.jawab)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i
handler.group = false
handler.register = true

module.exports = handler

