let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(global.API('xteam','/religi/kisahnabi', {}, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    name,
    thn_kelahiran,
    usia,
    description,
    tmp,
    image_url
  } = json.result
  let pp = image_url
  let caption = `
*「 Kisah Nabi 」*
  
*Nama:* ${name}
*Tahun Kelahiran:* ${thn_kelahiran} SM
*Usia:* ${usia}
*Tempat:* ${tmp}

   ${description}
`.trim()
if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['kisahnabi']
handler.tags = ['islamic']
handler.command = /^(kisahnabi)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler