let axios = require("axios");
let handler = async(m, { conn, text }) => {
	
let [text1, text2] = text.split('|')

    if (!text) return m.reply('Silahkan masukan nomor surah|nomor ayat\ncontoh *#quran 36|2*')

  await m.reply(global.wait)
	axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${text1}&ayat=${text2}`).then ((res) => {
	 	let res = res.data.result.data
	 	let caption = `
*「 Quran 」*

${res.surah.preBismillah.text.arab}
${res.surah.preBismillah.translation.en}
*Surah dan ayat ditemukan!*
*Keterangan surah*
*Nama surah :* ${res.surah.name.short} (${res.surah.transliteration.id}) (${res.surah.name.translation})
*Surah ke-:* ${res.surah.number}
*Jumlah ayat:* ${res.surah.numberOfVerses}
*Turun di:* ${res.surah.revelation.id}
*Tafsir:* ${res.surah.tafsir.id}

*Keterangan Ayat*
*Ayat ke-:* ${res.number.inSurah}

${res.text.arab}
${res.text.transliteration.en}

*Artinya :* ${res.translation.id}
*Tafsir :* ${res.tafsir.id.short}
`.trim()
	 	let pp = res.audio.primary
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