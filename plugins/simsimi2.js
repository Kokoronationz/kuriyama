let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi2', { kata: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw json
}
handler.help = ['simii', 'simsimii'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simii)$/i
handler.group = false
handler.register = true

module.exports = handler

