let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/photooxy')))).json()
  if (!effect) throw '*List Effect*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/photooxy/' + effect, { text, text2 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'photooxy.jpg', `*Photooxy*\n*Effect:* ${effect}`, m)
}

handler.help = ['photooxy'].map(v => v + ' <effect> <text>')
handler.tags = ['creator']
handler.command = /^(photooxy)$/i
handler.premium = true
handler.register = true

module.exports = handler