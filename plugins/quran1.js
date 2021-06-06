let axios = require("axios");
let handler = async(m, { conn, text }) => {
	
let [text1, text2] = text.split('|')

    if (!text) return m.reply('Silahkan masukan nomor surah|nomor ayat\ncontoh *#quran 36|2*')

  await m.reply(global.wait)
	axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${text1}&ayat=${text2}`).then ((res) => {
	 	let caption = `*「 Quran 」*\n\n ${res.data.result.data.preBismillah.text.arab}`
	 	let pp = res.data.result.data.audio.primary
  conn.reply(m.chat, caption, m)
 await conn.sendFile(m.chat, pp, 'pp.mp3', '', m)
})
}
handler.help = ['quran nomor surah|nomor ayat']
handler.tags = ['islamic']
handler.command = /^(quran)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler