let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  await m.reply(global.wait)
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.result) throw json
  conn.sendFile(m.chat, json.server_2, 'tiktok.mp4', '', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok(dl)?)$/i
handler.register = true
handler.premium = true

module.exports = handler
