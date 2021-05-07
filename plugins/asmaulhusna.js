let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(global.API('xteam','/religi/asmaulhusna', {}, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    index,
    latin,
    arabic,
    translation_id
  } = json.result
  let caption = `
*「 Asmaul Husna 」*

${index}. ${latin}

${arabic}

Artinya:
_"${translation_id}"_
`.trim()
  await m.reply(caption)
}
handler.help = ['asmaulhusna']
handler.tags = ['islamic']
handler.command = /^(asmaulhusna)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler