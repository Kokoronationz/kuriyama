let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Masukan kata', m)
  await m.reply('Searching...')
	axios.get(`https://api.zeks.xyz/api/gsmArena?apikey=apivinz&q=${kata}`).then ((res) => {
	 	let hasil = res.data.map(res=>`*Title:* ${res.title}\n\n*spesifikasi:*\n${res.full_desc.string}`)

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['gsmarena <text>']
handler.tags = ['internet']
handler.command = /^(gsmarena)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler