let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi2', { kata: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
  else throw json
}
handler.help = ['simi2', 'simsimi2', 'simih2'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi2|simih2)$/i
handler.group = true
handler.register = true

module.exports = handler
