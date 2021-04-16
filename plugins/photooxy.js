let fetch = require('node-fetch')
let [effect, teks] = text.split `|`
let handler = async (m, { conn, text }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/photooxy')))).json()
  if (!effect) throw '*List Effect*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let url = global.API('xteam', '/photooxy/' + effect, text, 'APIKEY')
  await conn.sendFile(m.chat, url, 'textpro.jpg', `*TEXTPRO*\n*Effect:* ${effect}`, m)
}
handler.help = ['photooxy'].map(v => v + ' <effect> <text>')
handler.tags = ['creator']
handler.command = /^(textpro)$/i
handler.premium = true
handler.register = true

module.exports = handler

