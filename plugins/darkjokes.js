let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
  let darkjokes = await url.json()

  conn.sendFile(m.chat, darkjokes.result, 'filename', '_*Gelap euy:v*_')
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^darkjokes$/i
handler.group = true
handler.register = true

module.exports = handler
