let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return m.reply('Silahkan masukan nama nabi,contoh *!kisahnabi adam*')

  await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/religi/kisahnabi/?nabi=${text.toLowerCase()}`).then ((res) => {
	 	let caption = `*Lahir Tahun:* ${res.data.result.tahun_kelahiran} SM\n*Tempat Lahir:* ${res.data.result.tempat_lahir}\n*Umur:* ${res.data.result.usia}\n\n*Cerita:* ${res.data.result.description}`
	 	let pp = res.data.result.image
if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', caption, m)
  else m.reply(caption)
})
}
handler.help = ['kisahnabi']
handler.tags = ['islamic']
handler.command = /^(kisahnabi)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler