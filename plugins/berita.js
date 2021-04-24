let axios = require("axios");
let handler = async(m, { conn, text }) => {
  
  await m.reply('Searching...')
	axios.get(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`).then ((res) => {
	 	let hasil = res.data.result.map(res=>`*Judul:* ${res.title}\n*Tanggal:* ${res.time}\n*Kategori:* ${res.category}\n     ${res.ket}\n*Link:* ${res.url}`).join('\n\n')

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['berita','news']
handler.tags = ['internet']
handler.command = /^(berita|news)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler