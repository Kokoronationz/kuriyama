  const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'neonimebatch url', m)
    await m.reply(global.wait)
    axios.get(`https://docs-jojo.herokuapp.com/api/neonime_batch?url=` + text)
        .then((res) => {
          let hasil = res.data.map(res=>`*Judul:* \n${res.title.en}\n${res.title.jp}\n*Rilis:* ${res.release}\n*Episode:* ${res.episode}\n*Durasi:* ${res.duration}\n*Rating:* ${res.rating}\n*Score:* ${res.score}\n*Deskripsi:* \n   ${res.desc}\n*Link:* \n` + (`${res.download_link.480p}`).join('\n') + `\n` + (`${res.download_link.720p}`).join('\n')
            conn.sendFile(m.chat, res.data.img, 'neo.jpg', hasil, m)
        })
        .catch()
}
handler.help = ['neonimebatch <url>']
handler.tags = ['weebs']
handler.command = /^(neo(nime)?batch)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
