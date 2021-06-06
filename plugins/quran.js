let axios = require("axios");
let handler = async(m, { conn, text }) => {
	
let [text1, text2] = text.split('|')

    if (!text) return m.reply('Silahkan masukan nomor surah|nomor ayat\ncontoh *#quran 36|2*')

  await m.reply(global.wait)
	axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${text1}&ayat=${text2}`).then ((res) => {
	 	let caption = `*「 Quran 」*\n\n ${res.data.result.data.preBismillah.text.arab}\n ${res.data.result.data.preBismillah.translation.id}\n\n *Surah dan ayat ditemukan!* \n\n *Keterangan surah* \n*Nama surah :* ${res.data.result.data.surah.name.short} (${res.data.result.data.surah.transliteration.id}) (${res.data.result.data.surah.name.translation})\n*Surah ke-:* ${res.data.result.data.surah.number}\n*Jumlah ayat:* ${res.data.result.data.surah.numberOfVerses}\n*Turun di:* ${res.data.result.data.surah.revelation.id}\n*Tafsir:* ${res.data.result.data.surah.tafsir.id}\n\n *Keterangan Ayat* \n*Ayat ke-:* ${res.data.result.data.number.inSurah}\n\n ${res.data.result.data.text.arab}\n ${res.data.result.data.text.transliteration.en}\n\n *Artinya :* ${res.data.result.data.translation.id}\n *Tafsir :* ${res.data.result.data.tafsir.id.short}`
	 	let pp = res.data.result.data.audio.primary
 conn.reply(m.chat, caption, m)
 conn.sendFile(m.chat, pp, 'pp.mp3', '', m)
})
}
handler.help = ['quran nomor surah|nomor ayat']
handler.tags = ['islamic']
handler.command = /^(quran)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler